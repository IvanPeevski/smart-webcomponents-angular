import { AfterViewInit, Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { ChartComponent } from 'smart-webcomponents-angular/chart';
import { Menu } from 'smart-webcomponents-angular/menu';
import { TableComponent } from 'smart-webcomponents-angular/table';
import { StylingService } from 'src/app/services/styling.service';

@Component({
  selector: 'sm-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AnalyticsComponent implements AfterViewInit {

  @ViewChild('devicesChart', { read: ChartComponent, static: false }) devicesChart!: ChartComponent;
  @ViewChild('interestsChart', { read: ChartComponent, static: false }) interestsChart!: ChartComponent;
  @ViewChild('sourceChart', { read: ChartComponent, static: false }) sourceChart!: ChartComponent;
  @ViewChild('trafficTable', { read: TableComponent, static: false }) trafficTable!: TableComponent;

  languagesData = [
    { language: 'English', users: 890 },
    { language: 'Chinese', users: 328 },
    { language: 'Spanish', users: 13 },
    { language: 'Hindi', users: 716 },
    { language: 'Russian', users: 96 },
  ];

  totalUsers = this.languagesData
    .map(dataPoint => dataPoint.users)
    .reduce((accumulator, currentValue) => accumulator + currentValue);

  sourceData = [
    { market: 'Direct', revenue: 2873, value: 11 },
    { market: 'Partner', revenue: 7201, value: -9 },
    { market: 'Online', revenue: 1254, value: 27 },
    { market: 'Other', revenue: 901, value: 0.2 }
  ];

  trafficData = [
    { source: 'Google', users: 3026, sessions: 18721, bounceRate: 11.3, avgSessionDuration: 785 },
    { source: 'Direct', users: 2983, sessions: 36789, bounceRate: 2.9, avgSessionDuration: 1893 },
    { source: 'Bing', users: 803, sessions: 1023, bounceRate: 33.4, avgSessionDuration: 802 },
    { source: 'Baidu', users: 902, sessions: 1203, bounceRate: 27.3, avgSessionDuration: 647 },
    { source: 'Yahoo!', users: 420, sessions: 730, bounceRate: 31, avgSessionDuration: 704 },
    { source: 'Yandex', users: 202, sessions: 594, bounceRate: 45.6, avgSessionDuration: 250 },
    { source: 'Ask.com', users: 123, sessions: 325, bounceRate: 56, avgSessionDuration: 341 },
    { source: 'DuckDuckGo', users: 903, sessions: 1490, bounceRate: 18.4, avgSessionDuration: 1109 }
  ];

  devicesData = [
    { month: 'Jan', mobile: 22, desktop: 89 },
    { month: 'Feb', mobile: 46, desktop: 92 },
    { month: 'Mar', mobile: 89, desktop: 80 },
    { month: 'Apr', mobile: 120, desktop: 78 },
    { month: 'May', mobile: 112, desktop: 90 },
    { month: 'Jun', mobile: 99, desktop: 101 },
    { month: 'Jul', mobile: 135, desktop: 88 },
    { month: 'Aug', mobile: 128, desktop: 99 },
    { month: 'Sep', mobile: 144, desktop: 76 },
    { month: 'Oct', mobile: 132, desktop: 97 },
    { month: 'Nov', mobile: 127, desktop: 80 },
    { month: 'Dec', mobile: 139, desktop: 85 }
  ];

  interestsData = [
    { field: 'Entertainment', users: 53 },
    { field: 'Technology', users: 80 },
    { field: 'Politics', users: 13 },
    { field: 'Art', users: 19 },
    { field: 'Sports', users: 49 },
  ];

  languagesTableData = {
    dataSource: this.languagesData,
    columns: [
      {
        label: 'Language', dataField: 'language', dataType: 'string', width: 80, formatFunction(settings: any) {
          const value = settings.value;
          let code;

          switch (value) {
            case 'English':
              code = 'usa';
              break;
            case 'Chinese':
              code = 'china';
              break;
            case 'Spanish':
              code = 'spain';
              break;
            case 'Hindi':
              code = 'india';
              break;
            case 'Russian':
              code = 'russian-federation';
              break;
          }

          settings.template = `<img src="https://img.icons8.com/office/30/000000/${code}.png" alt="${value}" title="${value}">`;
        }
      },
      { label: 'Users', dataField: 'users', dataType: 'number', width: 80 },
      {
        label: '% Users',
        dataField: '',
        dataType: 'number',
        languagesData: () => this.languagesData,
        totalUsers: () => this.totalUsers,
        formatFunction(settings: any) {

          const percentage = (this.languagesData()[settings.row].users * 100) / this.totalUsers();

          settings.template = `<smart-progress-bar show-progress-value value=${percentage}></smart-progress-bar>`;
        }
      }
    ],
  }

  customColors = [
    this.styling.getComputedStyleVars('primary'),
    this.styling.getComputedStyleVars('info'),
    this.styling.getComputedStyleVars('warning'),
    this.styling.getComputedStyleVars('success'),
    this.styling.getComputedStyleVars('danger'),
    this.styling.getComputedStyleVars('secondary')
  ];

  theme = this.styling.getTheme();

  sourceTableData = {
    dataSource: this.sourceData,
    columns: [
      {
        label: 'Source', dataField: 'market', dataType: 'string', formatFunction(settings: any) {
          settings.template = `<div class="color-box-container"><div class="color-box ${settings.value.toLowerCase()}"></div>${settings.value}</div>`;
        }
      },
      {
        label: 'Revenue', dataField: 'revenue', dataType: 'number', formatFunction(settings: any) {
          settings.template = `$ ${settings.value}`;
        }
      },
      {
        label: 'Value', dataField: 'value', dataType: 'number', formatFunction(settings: any) {
          settings.cell.classList.add(settings.value > 0 ? 'positive' : 'negative');

          settings.template = settings.value + '%';
        }
      }
    ]
  }

  trafficTableData = {
    dataSource: this.trafficData,
    sortMode: 'many',
    columns: [
      { label: 'Source', dataField: 'source', dataType: 'string' },
      { label: 'Users', dataField: 'users', dataType: 'number' },
      { label: 'Sessions', dataField: 'sessions', dataType: 'number' },
      {
        label: 'Bounce Rate', dataField: 'bounceRate', dataType: 'number', formatFunction(settings: any) {
          settings.cell.classList.add(settings.value < 40 ? 'positive' : 'negative');

          settings.template = settings.value + '%';
        }
      },
      {
        label: 'Avg. Session Duration', dataField: 'avgSessionDuration', dataType: 'number', formatFunction(settings: any) {
          let seconds = settings.value,
            hoursPart, minutesPart, secondsPart;

          hoursPart = Math.floor(seconds / 3600);
          seconds = seconds % 3600;
          minutesPart = Math.floor(seconds / 60).toString().padStart(2, '0');
          secondsPart = (seconds % 60).toString().padStart(2, '0');

          settings.template = hoursPart + ':' + minutesPart + ':' + secondsPart;
        }
      },
    ]
  }

  deviceChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 15, right: 25, bottom: 5 },
    dataSource: this.devicesData,
    xAxis: {
      dataField: 'month',
      displayText: 'Month',
      gridLines: {
        visible: false
      }
    },
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'column',
        valueAxis: {
          labels: {
            horizontalAlignment: 'right',
            formatSettings: { decimalPlaces: 0 }
          },
          gridLines: {
            visible: false
          }
        },
        series: [
          { dataField: 'mobile', displayText: 'Mobile' },
          { dataField: 'desktop', displayText: 'Desktop' }
        ]
      }
    ]
  }

  interestsChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 5, top: 5, right: 5, bottom: 5 },
    dataSource: this.interestsData,
    colorScheme: 'custom',
    xAxis:
    {
      dataField: 'field',
      displayText: 'Field',
      valuesOnTicks: true,
      labels: { autoRotate: true }
    },
    seriesGroups:
      [
        {
          spider: true,
          startAngle: 0,
          endAngle: 360,
          radius: 80,
          type: 'area',
          series: [
            { dataField: 'users', displayText: 'Users', opacity: 0.7, radius: 2, lineWidth: 2, symbolType: 'circle' }
          ]
        }
      ]
  }

  sourceChartData = {
    animation: 'none',
    theme: this.theme,
    caption: 'Caption',
    description: 'Description',
    showLegend: true,
    showBorderLine: true,
    padding: { left: 0, top: 0, right: 0, bottom: 0 },
    dataSource: this.sourceData,
    colorScheme: 'custom',
    seriesGroups: [
      {
        type: 'donut',
        series: [
          {
            dataField: 'revenue',
            displayText: 'market',
            radius: 70,
            innerRadius: 50,
            selectedRadiusChange: 2

          }
        ]
      }
    ]
  }

  constructor(private styling: StylingService) { }

  ngAfterViewInit(): void {
    this.devicesChart.addColorScheme('custom', this.customColors);
    this.devicesChart.refresh();

    this.interestsChart.addColorScheme('custom', this.customColors);
    this.interestsChart.refresh();

    this.sourceChart.addColorScheme('custom', this.customColors);
    this.sourceChart.refresh();
    
    this.trafficTable.sortBy('sessions', 'desc');
  }

  stopPropagation(e: Event) {
    e.stopPropagation();
  }

  toggleMenu(button: HTMLElement) {

    const todayMenu = document.querySelector('#todayMenu') as Menu;
    const rect = button.getBoundingClientRect();

    Array.from(document.getElementsByTagName('smart-menu'))
      .filter(currentMenu => currentMenu !== todayMenu)
      .forEach(currentMenu => currentMenu.close());

    document.querySelectorAll('.dropdown-menu-show').forEach(e => {
      e.classList.remove('dropdown-menu-show');
    })

    document.querySelectorAll('.dropdown-button')
      .forEach(menu => menu.classList.remove('dropdown-button-active'));

    if (!todayMenu.opened) {

      todayMenu.open(rect.right - todayMenu.offsetWidth, rect.bottom + window.scrollY);

    } else {

      todayMenu.close();

    }

  }

}
