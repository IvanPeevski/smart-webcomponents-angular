
if (!window['Smart']) {
	window['Smart'] = { RenderMode: 'manual' };
}
else {
	window['Smart'].RenderMode = 'manual';
}
import './../source/modules/smart.listbox';

import { __decorate, __extends, __awaiter, __generator } from 'tslib';
import { EventEmitter, Output, Input, forwardRef, ElementRef, Directive, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

var BaseElement = /** @class */ (function () {
    function BaseElement(ref) {
        this.onCreate = new EventEmitter();
        this.onReady = new EventEmitter();
        this.onAttach = new EventEmitter();
        this.onDetach = new EventEmitter();
        var that = this;
        this.nativeElement = ref.nativeElement;
        that.nativeElement.onAttached = function () {
            that.onAttach.emit(that.nativeElement);
        };
        that.nativeElement.onDetached = function () {
            that.onDetach.emit(that.nativeElement);
        };
    }
    BaseElement.prototype.addEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.addEventListener(type, listener, options);
    };
    BaseElement.prototype.removeEventListener = function (type, listener, options) {
        if (options === void 0) { options = false; }
        this.nativeElement.removeEventListener(type, listener, options);
    };
    BaseElement.prototype.dispatchEvent = function (event) {
        return this.nativeElement.dispatchEvent(event);
    };
    BaseElement.prototype.blur = function () {
        this.nativeElement.blur();
    };
    BaseElement.prototype.click = function () {
        this.nativeElement.click();
    };
    BaseElement.prototype.focus = function (options) {
        this.nativeElement.focus(options);
    };
    Object.defineProperty(BaseElement.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property locale.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseElement.prototype, "theme", {
        /** @description Determines the theme. Theme defines the look of the element */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Output()
    ], BaseElement.prototype, "onCreate", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onReady", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onAttach", void 0);
    __decorate([
        Output()
    ], BaseElement.prototype, "onDetach", void 0);
    __decorate([
        Input()
    ], BaseElement.prototype, "locale", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "messages", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], BaseElement.prototype, "theme", null);
    return BaseElement;
}());
var Smart = window.Smart;

var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return ListBoxComponent; }),
    multi: true
};
var ListBoxComponent = /** @class */ (function (_super) {
    __extends(ListBoxComponent, _super);
    function ListBoxComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        /**
        * @description
        * The registered callback function called when a change event occurs on the form elements.
        */
        _this._onChange = function () { };
        /**
        * @description
        * The registered callback function called when a blur event occurs on the form elements.
        */
        _this._onTouched = function () { };
        /** @description This event is triggered when listbox binding is completed.
        *  @param event. The custom event. 	*/
        _this.onBindingComplete = new EventEmitter();
        /** @description This event is triggered when selection is changed.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	addedItems, 	disabled, 	index, 	label, 	removedItems, 	selected, 	value)
        *   addedItems - An array of List items that have been selected.
        *   disabled - A flag indicating whether or not the item that caused the change event is disabled.
        *   index - The index of the List item that triggered the event.
        *   label - The label of the List item that triggered the event.
        *   removedItems - An array of List items that have been unselected before the event was fired.
        *   selected - The selected state of the List item that triggered the event. If an item was selected the value will be true and vice versa.
        *   value - The value of the List item that triggered the event.
        */
        _this.onChange = new EventEmitter();
        /** @description This event is triggered when an item is dropped. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
        *   container - The List box that an item was dragged <strong>to.</strong>
        *   data - An object that contains data about the dragging operation like start position, start time, etc.
        *   item - The List item that was dragged.
        *   originalEvent - That original event that was fired.
        *   previousContainer - The List box that an item was dragged <strong>from</strong>.
        *   target - The event target.
        */
        _this.onDragEnd = new EventEmitter();
        /** @description This event is triggered when a List item is being dragged.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	data, 	item, 	originalEvent)
        *   data - An object that contains data about the dragging operation like start position, start time, etc.
        *   item - The List item that is being dragged. This is the item that has been clicked when initiating the drag operation
        *   originalEvent - The original event that initiates the dragging operation.
        */
        _this.onDragging = new EventEmitter();
        /** @description This event is triggered when an item is dragged. The dragging operation can be canceled by calling event.preventDefault() in the event handler function.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	container, 	data, 	item, 	originalEvent, 	previousContainer, 	target)
        *   container - The List box that an item was dragged <strong>to.</strong>
        *   data - An object that contains data about the dragging oepration like start position, start time, etc.
        *   item - The List item that was dragged.
        *   originalEvent - That original event that was fired.
        *   previousContainer - The List box that an item was dragged <strong>from</strong>.
        *   target - The event target.
        */
        _this.onDragStart = new EventEmitter();
        /** @description This event is triggered when an item is clicked.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	disabled, 	index, 	label, 	selected, 	value)
        *   disabled - Indicates whether the List item that was clicked is disabled or not.
        *   index - Indicates the index of the List item that was clicked.
        *   label - The label of the List item that was clicked.
        *   selected - Indicates whether the List item that was clicked is selected or not.
        *   value - The value of the List item that was clicked.
        */
        _this.onItemClick = new EventEmitter();
        /** @description This event is triggered when an item has been edited.
        *  @param event. The custom event. 	Custom event was created with: event.detail(	selected, 	disabled, 	index, 	label, 	value)
        *   selected - Indicates whether the List item is selected or not.
        *   disabled - Indicates whether the List item is disabled or not.
        *   index - The index of the List item that was edited.
        *   label - The label of the edited List item.
        *   value - The value of the List item that was edited.
        */
        _this.onItemLabelChange = new EventEmitter();
        /** @description This event is triggered when user scrolls to the end of the list.
        *  @param event. The custom event. 	*/
        _this.onScrollBottomReached = new EventEmitter();
        /** @description This event is triggered when user scrolls to the beginning of the list.
        *  @param event. The custom event. 	*/
        _this.onScrollTopReached = new EventEmitter();
        /** @description This event is triggered when the user swipes to the left, inside the listBox.
        *  @param event. The custom event. 	*/
        _this.onSwipeleft = new EventEmitter();
        /** @description This event is triggered when the user swipes to the right, inside the listBox.
        *  @param event. The custom event. 	*/
        _this.onSwiperight = new EventEmitter();
        _this._initialChange = true;
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListBoxComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-box');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListBoxComponent.prototype, "allowDrag", {
        /** @description Enables or disables the ability to drag list items out of the List box. Disabled items cannot be dragged. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrag : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrag = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "allowDrop", {
        /** @description Enables or disables the ability to drop list items inside the target List box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.allowDrop : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.allowDrop = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "alternationCount", {
        /** @description Determines the number of color alternations in rows. */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationCount : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationCount = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "alternationEnd", {
        /** @description Determines the ending index of color alternations in rows. */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationEnd : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationEnd = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "alternationStart", {
        /** @description Determines the starting index of color alternations in rows */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationStart : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationStart = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "animation", {
        /** @description Sets or gets the animation mode. Animation is disabled when the property is set to 'none' */
        get: function () {
            return this.nativeElement ? this.nativeElement.animation : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.animation = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "autoSort", {
        /** @description Enables or disables auto sorting. If sorted is enabled, but autoSort is false, the element will not be re-sorted automatically. */
        get: function () {
            return this.nativeElement ? this.nativeElement.autoSort : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.autoSort = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "dataSource", {
        /** @description Determines the data source that will be loaded to the ListBox. The dataSource can be an array of strings/numbers or objects where the attributes represent the properties of a List Item. For example label, value, group. It can also be a callback that returns an Array of items as previously described. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dataSource : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dataSource = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "disabled", {
        /** @description Enables or disables the list box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.disabled : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.disabled = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "displayLoadingIndicator", {
        /** @description Determines whether an indicator will appear during filtering and remote item loading. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayLoadingIndicator : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayLoadingIndicator = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "displayMember", {
        /** @description Sets or gets the displayMember. The displayMember specifies the name of an object property to display. The name is contained in the collection specified by the 'dataSource' property. */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "dragFeedbackFormatFunction", {
        /** @description A callback function for customizing the HTML of the drag feedback. It receives one parameter - the currently dragged item. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragFeedbackFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "dragOffset", {
        /** @description Determines the offset of the drag feedback element from the mouse cursor when dragging an item. The first member of the array is the horizontal offset and the second one - the vertical offset. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dragOffset : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dragOffset = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "dropAction", {
        /** @description Determines what happens when an item is dropped. */
        get: function () {
            return this.nativeElement ? this.nativeElement.dropAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.dropAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "editable", {
        /** @description Determines if list items can be edited or not. If enabled, items can be edited by double clicking on a target item ( that is not disabled ) or pressing the F2 key on the keyboard. */
        get: function () {
            return this.nativeElement ? this.nativeElement.editable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.editable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "filterable", {
        /** @description Determines whether list items can be filtered or not. If enable a filter input appears at the top of the list box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "filterCallback", {
        /** @description A callback that should return a condition that will be used for custom item filtering. Used in conjunction with filterMode 'custom' */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterCallback : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterCallback = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "filterMode", {
        /** @description Determines the filtering mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "filterInputPlaceholder", {
        /** @description Determines the placeholder for the filter input field. */
        get: function () {
            return this.nativeElement ? this.nativeElement.filterInputPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.filterInputPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "grouped", {
        /** @description If enabled, the items will be grouped by their first letter. Can't be applied if the dataSource already contains groups. */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "groupMember", {
        /** @description Determines which attribute from the dataSource object will be used as the group member for the items. If not set, by default 'group' property is used from the source object. groupMember is especially usefull when loading the data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used to group the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.groupMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.groupMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "horizontalScrollBarVisibility", {
        /** @description Determines the visibility of the horizontal Scroll bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.horizontalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "incrementalSearchDelay", {
        /** @description IncrementalSearchDelay property specifies the time-interval in milliseconds until the previous search query is cleared. The timer starts when the user stops typing. A new query can be started only when the delay has passed. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchDelay : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchDelay = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "incrementalSearchMode", {
        /** @description Sets ot gets the mode of the incremental search mode. Incremental search is enabled by default. Typing while the List box is focused starts the incremental search. */
        get: function () {
            return this.nativeElement ? this.nativeElement.incrementalSearchMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.incrementalSearchMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "itemHeight", {
        /** @description Sets the height for all list box items. Used only when virtualization is enabled. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemHeight : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemHeight = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "itemMeasureMode", {
        /** @description Determines the item width measuring algorithm. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemMeasureMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemMeasureMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "items", {
        /** @description A getter that returns an array of all ListBox items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.items : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.items = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "itemTemplate", {
        /** @description A string that represents the id of an HTMLTemplateElement inside the DOM or a reference to the template itself. It's used to set a custom template for the list items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.itemTemplate : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.itemTemplate = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "loadingIndicatorPlaceholder", {
        /** @description Determines the text that will be displayed next to the loading indicator when the loader is visible and it's position is top or bottom. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPlaceholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "loadingIndicatorPosition", {
        /** @description Determines the position of the loading indicator. */
        get: function () {
            return this.nativeElement ? this.nativeElement.loadingIndicatorPosition : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.loadingIndicatorPosition = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "locale", {
        /** @description Sets or gets the language. Used in conjunction with the property messages.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.locale : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.locale = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "localizeFormatFunction", {
        /** @description Callback used to customize the format of the messages that are returned from the Localization Module. */
        get: function () {
            return this.nativeElement ? this.nativeElement.localizeFormatFunction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.localizeFormatFunction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "messages", {
        /** @description Sets or gets an object specifying strings used in the widget that can be localized. Used in conjunction with the property language.  */
        get: function () {
            return this.nativeElement ? this.nativeElement.messages : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.messages = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "name", {
        /** @description Sets or gets the name attribute for the element. Name is used when submiting HTML forms. */
        get: function () {
            return this.nativeElement ? this.nativeElement.name : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.name = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "placeholder", {
        /** @description Determines the placeholder that will be shown when the List box is empty. */
        get: function () {
            return this.nativeElement ? this.nativeElement.placeholder : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.placeholder = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "readonly", {
        /** @description Sets or gets the readonly property. If the element is readonly, users cannot interact with it. */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "rightToLeft", {
        /** @description Sets or gets the value indicating whether the element is aligned to support locales using right-to-left fonts. */
        get: function () {
            return this.nativeElement ? this.nativeElement.rightToLeft : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.rightToLeft = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "selectedIndexes", {
        /** @description Sets or gets the selected indexes. Selected indexes represents an array of the indexes of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedIndexes : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedIndexes = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "selectedValues", {
        /** @description Sets or gets elected indexes. Selected values represents the values of the items that should be selected. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectedValues : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectedValues = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "selectionMode", {
        /** @description Determines how many items can be selected depending on the selection mode. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "selectionChangeAction", {
        /** @description Determines when listbox selection is achieved - on 'press' or 'release'. */
        get: function () {
            return this.nativeElement ? this.nativeElement.selectionChangeAction : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selectionChangeAction = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "sorted", {
        /** @description Determines whether the items are sorted alphabetically or not */
        get: function () {
            return this.nativeElement ? this.nativeElement.sorted : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sorted = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "sortDirection", {
        /** @description Determines sorting direction - ascending(asc) or descending(desc) */
        get: function () {
            return this.nativeElement ? this.nativeElement.sortDirection : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.sortDirection = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "theme", {
        /** @description Determines the theme for the element. Themes define the look of the elements. */
        get: function () {
            return this.nativeElement ? this.nativeElement.theme : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.theme = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "topVisibleIndex", {
        /** @description Ensures the item with the target index is in view as the first (top) item in the list box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.topVisibleIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.topVisibleIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "unfocusable", {
        /** @description If is set to true, the element cannot be focused. */
        get: function () {
            return this.nativeElement ? this.nativeElement.unfocusable : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.unfocusable = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "value", {
        /** @description Sets or gets the value. Returns the selection. Return type: {label: string, value: any}[]. */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "valueMember", {
        /** @description Determines the value member of an item. Stored as value in the item object. Similar to groupMember, valueMember is especially usefull when using data from a JSON file as a dataSource for the ListBox and there's a specific property that should be used for the value the items. */
        get: function () {
            return this.nativeElement ? this.nativeElement.valueMember : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.valueMember = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "verticalScrollBarVisibility", {
        /** @description Determines the visibility of the vertical scroll bar. */
        get: function () {
            return this.nativeElement ? this.nativeElement.verticalScrollBarVisibility : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.verticalScrollBarVisibility = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListBoxComponent.prototype, "virtualized", {
        /** @description Determines weather or not Virtualization is used for the ListBox. Virtualization allows a huge amount of items to be loaded to the List box while preserving the performance. For example a milion items can be loaded to the list box. */
        get: function () {
            return this.nativeElement ? this.nativeElement.virtualized : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.virtualized = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    /** @description Appends a ListItem to the end of the list of items inside element.
    * @param {Node} node. A ListItem element that should be added to the rest of the items as the last item.
    * @returns {Node}
  */
    ListBoxComponent.prototype.appendChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.appendChild(node);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Removes all items from the listBox.
    */
    ListBoxComponent.prototype.clearItems = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearItems();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearItems();
            });
        }
    };
    /** @description Unselects all items.
    */
    ListBoxComponent.prototype.clearSelection = function () {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.clearSelection();
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.clearSelection();
            });
        }
    };
    /** @description Ensures the target item is visible by scrolling to it.
    * @param {HTMLElement | string} item. A list item or value of the desired item to be visible.
    */
    ListBoxComponent.prototype.ensureVisible = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.ensureVisible(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.ensureVisible(item);
            });
        }
    };
    /** @description Returns an item instance from the listBox.
    * @param {string} value. The value of an item from the listBox.
    * @returns {HTMLElement}
  */
    ListBoxComponent.prototype.getItem = function (value) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItem(value);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Returns an array of ListBox items.
    * @returns {{label: string, value: string}[]}
  */
    ListBoxComponent.prototype.getItems = function () {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.getItems();
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Inserts a new item at a specified index.
    * @param {number} index. The index where the item must be inserted.
    * @param {any} items. A single item/definition or an array of List Items/definitions of list items to be inserted. The format of the item definitions is the same as the format of the <strong>dataSource</strong> property.
    */
    ListBoxComponent.prototype.insert = function (index, items) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.insert(index, items);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.insert(index, items);
            });
        }
    };
    /** @description Inserts a new ListItem before another in the list.
    * @param {Node} node. A ListItem element that should be added before the referenceItem in the list.
    * @param {Node | null} referenceNode. A ListItem element that acts as the reference item before which a new item is about to be inserted. The referenceNode must be in the same list as the node.
    * @returns {Node}
  */
    ListBoxComponent.prototype.insertBefore = function (node, referenceNode) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.insertBefore(node, referenceNode);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Removes an item at a specified index.
    * @param {number} index. The index of the removed item.
    */
    ListBoxComponent.prototype.removeAt = function (index) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.removeAt(index);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.removeAt(index);
            });
        }
    };
    /** @description Removes a ListItem from the list of items inside element.
    * @param {Node} node. A ListItem element that is part of the list of items inside the element.
    * @returns {Node}
  */
    ListBoxComponent.prototype.removeChild = function (node) {
        return __awaiter(this, void 0, void 0, function () {
            var getResultOnRender, result;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        getResultOnRender = function () {
                            return new Promise(function (resolve) {
                                _this.nativeElement.whenRendered(function () {
                                    var result = _this.nativeElement.removeChild(node);
                                    resolve(result);
                                });
                            });
                        };
                        return [4 /*yield*/, getResultOnRender()];
                    case 1:
                        result = _a.sent();
                        return [2 /*return*/, result];
                }
            });
        });
    };
    /** @description Selects an item from the listBox.
    * @param {string | number | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list.
    */
    ListBoxComponent.prototype.select = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.select(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.select(item);
            });
        }
    };
    /** @description Unselects an item from the listBox.
    * @param {string | HTMLElement} item. A string, representing the value of the item or an HTML Element referencing an item from the list
    */
    ListBoxComponent.prototype.unselect = function (item) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.unselect(item);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.unselect(item);
            });
        }
    };
    /** @description Updates an item from the listBox.
    * @param {number} index. The index of the item that is going to be updated.
    * @param {any} details. An object that contains the properties and their new values for the List item that should be updated. For example, label, value or selected attributes.
    */
    ListBoxComponent.prototype.update = function (index, details) {
        var _this = this;
        if (this.nativeElement.isRendered) {
            this.nativeElement.update(index, details);
        }
        else {
            this.nativeElement.whenRendered(function () {
                _this.nativeElement.update(index, details);
            });
        }
    };
    Object.defineProperty(ListBoxComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListBoxComponent.prototype.ngOnInit = function () {
    };
    ListBoxComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        Smart.Render();
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
        this.listen();
    };
    ListBoxComponent.prototype.ngOnDestroy = function () {
        this.unlisten();
    };
    Object.defineProperty(ListBoxComponent.prototype, "ngValue", {
        get: function () {
            if (!this.nativeElement) {
                return null;
            }
            if (this.selectedValues && this.selectedValues.length > 0) {
                var value_1 = this.selectedValues.length === 1 ? this.nativeElement.selectedValues[0] : this.nativeElement.selectedValues;
                return value_1;
            }
            return null;
            var value = this.nativeElement.value;
            return value;
        },
        set: function (value) {
            if (this.nativeElement) {
                this.writeValue(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    ListBoxComponent.prototype.writeValue = function (value) {
        var _this = this;
        var that = this;
        var normalizedValue = value == null ? '' : value;
        that.nativeElement.whenRendered(function () {
            that.nativeElement.isInitialized = that._initialChange ? false : true;
            that.clearSelection();
            if (Array.isArray(normalizedValue)) {
                value.forEach(function (currentValue) { return _this.select(currentValue); });
            }
            else {
                that.select(normalizedValue);
            }
            that.nativeElement.isInitialized = true;
            if (that._initialChange === false) {
                if (that.selectedValues && that.selectedValues.length > 1) {
                    that._onChange(that.selectedValues);
                }
                else {
                    that._onChange((that.selectedValues && that.selectedValues.length > 0) ? that.selectedValues[0] : null);
                }
            }
        });
    };
    ListBoxComponent.prototype.registerOnChange = function (fn) {
        this._onChange = fn;
    };
    ListBoxComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    ListBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    /** @description Add event listeners. */
    ListBoxComponent.prototype.listen = function () {
        var that = this;
        that.eventHandlers['bindingCompleteHandler'] = function (event) { that.onBindingComplete.emit(event); };
        that.nativeElement.addEventListener('bindingComplete', that.eventHandlers['bindingCompleteHandler']);
        that.eventHandlers['changeHandler'] = function (event) { that.onChange.emit(event); };
        that.nativeElement.addEventListener('change', that.eventHandlers['changeHandler']);
        that.eventHandlers['dragEndHandler'] = function (event) { that.onDragEnd.emit(event); };
        that.nativeElement.addEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        that.eventHandlers['draggingHandler'] = function (event) { that.onDragging.emit(event); };
        that.nativeElement.addEventListener('dragging', that.eventHandlers['draggingHandler']);
        that.eventHandlers['dragStartHandler'] = function (event) { that.onDragStart.emit(event); };
        that.nativeElement.addEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        that.eventHandlers['itemClickHandler'] = function (event) { that.onItemClick.emit(event); };
        that.nativeElement.addEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        that.eventHandlers['itemLabelChangeHandler'] = function (event) { that.onItemLabelChange.emit(event); };
        that.nativeElement.addEventListener('itemLabelChange', that.eventHandlers['itemLabelChangeHandler']);
        that.eventHandlers['scrollBottomReachedHandler'] = function (event) { that.onScrollBottomReached.emit(event); };
        that.nativeElement.addEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        that.eventHandlers['scrollTopReachedHandler'] = function (event) { that.onScrollTopReached.emit(event); };
        that.nativeElement.addEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        that.eventHandlers['swipeleftHandler'] = function (event) { that.onSwipeleft.emit(event); };
        that.nativeElement.addEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        that.eventHandlers['swiperightHandler'] = function (event) { that.onSwiperight.emit(event); };
        that.nativeElement.addEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        that.eventHandlers['changeModelHandler'] = function (event) {
            that._initialChange = false;
            that._onChange(that.nativeElement.selectedValues.length > 0 ? (that.nativeElement.selectedValues.length > 1 ? that.nativeElement.selectedValues : that.nativeElement.selectedValues[0]) : null);
        };
        that.eventHandlers['blurModelHandler'] = function (event) {
            that._onTouched();
        };
        that.nativeElement.whenRendered(function () {
            if (that.nativeElement.querySelector('input')) {
                that.eventHandlers['keyupModelHandler'] = function (event) {
                    setTimeout(function () { that.eventHandlers['changeModelHandler'](event); }, 50);
                };
                that.nativeElement.querySelector('input').addEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        });
        that.nativeElement.addEventListener('change', that.eventHandlers['changeModelHandler']);
        that.nativeElement.addEventListener('blur', that.eventHandlers['blurModelHandler']);
    };
    /** @description Remove event listeners. */
    ListBoxComponent.prototype.unlisten = function () {
        var that = this;
        if (that.eventHandlers['bindingCompleteHandler']) {
            that.nativeElement.removeEventListener('bindingComplete', that.eventHandlers['bindingCompleteHandler']);
        }
        if (that.eventHandlers['changeHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeHandler']);
        }
        if (that.eventHandlers['dragEndHandler']) {
            that.nativeElement.removeEventListener('dragEnd', that.eventHandlers['dragEndHandler']);
        }
        if (that.eventHandlers['draggingHandler']) {
            that.nativeElement.removeEventListener('dragging', that.eventHandlers['draggingHandler']);
        }
        if (that.eventHandlers['dragStartHandler']) {
            that.nativeElement.removeEventListener('dragStart', that.eventHandlers['dragStartHandler']);
        }
        if (that.eventHandlers['itemClickHandler']) {
            that.nativeElement.removeEventListener('itemClick', that.eventHandlers['itemClickHandler']);
        }
        if (that.eventHandlers['itemLabelChangeHandler']) {
            that.nativeElement.removeEventListener('itemLabelChange', that.eventHandlers['itemLabelChangeHandler']);
        }
        if (that.eventHandlers['scrollBottomReachedHandler']) {
            that.nativeElement.removeEventListener('scrollBottomReached', that.eventHandlers['scrollBottomReachedHandler']);
        }
        if (that.eventHandlers['scrollTopReachedHandler']) {
            that.nativeElement.removeEventListener('scrollTopReached', that.eventHandlers['scrollTopReachedHandler']);
        }
        if (that.eventHandlers['swipeleftHandler']) {
            that.nativeElement.removeEventListener('swipeleft', that.eventHandlers['swipeleftHandler']);
        }
        if (that.eventHandlers['swiperightHandler']) {
            that.nativeElement.removeEventListener('swiperight', that.eventHandlers['swiperightHandler']);
        }
        if (that.eventHandlers['changeModelHandler']) {
            that.nativeElement.removeEventListener('change', that.eventHandlers['changeModelHandler']);
            if (that.nativeElement.querySelector('input')) {
                that.nativeElement.querySelector('input').removeEventListener('keyup', that.eventHandlers['keyupModelHandler']);
            }
        }
        if (that.eventHandlers['blurModelHandler']) {
            that.nativeElement.removeEventListener('blur', that.eventHandlers['blurModelHandler']);
        }
    };
    ListBoxComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "allowDrag", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "allowDrop", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "alternationCount", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "alternationEnd", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "alternationStart", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "animation", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "autoSort", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "dataSource", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "disabled", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "displayLoadingIndicator", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "displayMember", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "dragFeedbackFormatFunction", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "dragOffset", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "dropAction", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "editable", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "filterable", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "filterCallback", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "filterMode", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "filterInputPlaceholder", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "groupMember", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "horizontalScrollBarVisibility", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "incrementalSearchDelay", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "incrementalSearchMode", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "itemHeight", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "itemMeasureMode", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "items", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "itemTemplate", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "loadingIndicatorPlaceholder", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "loadingIndicatorPosition", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "locale", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "localizeFormatFunction", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "messages", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "name", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "placeholder", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "readonly", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "rightToLeft", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "selectedIndexes", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "selectedValues", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "selectionMode", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "selectionChangeAction", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "sorted", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "sortDirection", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "theme", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "topVisibleIndex", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "unfocusable", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "value", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "valueMember", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "verticalScrollBarVisibility", null);
    __decorate([
        Input()
    ], ListBoxComponent.prototype, "virtualized", null);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onBindingComplete", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onChange", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onDragEnd", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onDragging", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onDragStart", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onItemClick", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onItemLabelChange", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onScrollBottomReached", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onScrollTopReached", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onSwipeleft", void 0);
    __decorate([
        Output()
    ], ListBoxComponent.prototype, "onSwiperight", void 0);
    ListBoxComponent = __decorate([
        Directive({
            exportAs: 'smart-list-box', selector: 'smart-list-box, [smart-list-box]',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
        })
    ], ListBoxComponent);
    return ListBoxComponent;
}(BaseElement));

var ListItemComponent = /** @class */ (function (_super) {
    __extends(ListItemComponent, _super);
    function ListItemComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-item');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemComponent.prototype, "alternationIndex", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.alternationIndex : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.alternationIndex = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "color", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.color : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.color = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "displayMode", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.displayMode : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.displayMode = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "grouped", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.grouped : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.grouped = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "selected", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.selected : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.selected = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "value", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.value : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.value = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "details", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.details : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.details = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "group", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.group : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.group = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "hidden", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.hidden : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.hidden = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "readonly", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.readonly : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.readonly = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemComponent.prototype.ngOnInit = function () {
    };
    ListItemComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemComponent.prototype.ngOnDestroy = function () { };
    ListItemComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemComponent.prototype, "alternationIndex", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "color", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "displayMode", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "grouped", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "selected", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "value", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "label", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "details", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "group", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "hidden", null);
    __decorate([
        Input()
    ], ListItemComponent.prototype, "readonly", null);
    ListItemComponent = __decorate([
        Directive({
            exportAs: 'smart-list-item', selector: 'smart-list-item, [smart-list-item]'
        })
    ], ListItemComponent);
    return ListItemComponent;
}(BaseElement));

var ListItemsGroupComponent = /** @class */ (function (_super) {
    __extends(ListItemsGroupComponent, _super);
    function ListItemsGroupComponent(ref) {
        var _this = _super.call(this, ref) || this;
        _this.eventHandlers = [];
        _this.nativeElement = ref.nativeElement;
        return _this;
    }
    /** @description Creates the component on demand.
     * @param properties An optional object of properties, which will be added to the template binded ones.
     */
    ListItemsGroupComponent.prototype.createComponent = function (properties) {
        if (properties === void 0) { properties = {}; }
        this.nativeElement = document.createElement('smart-list-items-group');
        for (var propertyName in properties) {
            this.nativeElement[propertyName] = properties[propertyName];
        }
        return this.nativeElement;
    };
    Object.defineProperty(ListItemsGroupComponent.prototype, "label", {
        /** @description  */
        get: function () {
            return this.nativeElement ? this.nativeElement.label : undefined;
        },
        set: function (value) {
            this.nativeElement ? this.nativeElement.label = value : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ListItemsGroupComponent.prototype, "isRendered", {
        get: function () {
            return this.nativeElement ? this.nativeElement.isRendered : false;
        },
        enumerable: true,
        configurable: true
    });
    ListItemsGroupComponent.prototype.ngOnInit = function () {
    };
    ListItemsGroupComponent.prototype.ngAfterViewInit = function () {
        var that = this;
        that.onCreate.emit(that.nativeElement);
        this.nativeElement.classList.add('smart-angular');
        this.nativeElement.whenRendered(function () { that.onReady.emit(that.nativeElement); });
    };
    ListItemsGroupComponent.prototype.ngOnDestroy = function () { };
    ListItemsGroupComponent.prototype.ngOnChanges = function (changes) {
        if (this.nativeElement && this.nativeElement.isRendered) {
            for (var propName in changes) {
                if (changes.hasOwnProperty(propName)) {
                    this.nativeElement[propName] = changes[propName].currentValue;
                }
            }
        }
    };
    ListItemsGroupComponent.ctorParameters = function () { return [
        { type: ElementRef }
    ]; };
    __decorate([
        Input()
    ], ListItemsGroupComponent.prototype, "label", null);
    ListItemsGroupComponent = __decorate([
        Directive({
            exportAs: 'smart-list-items-group', selector: 'smart-list-items-group, [smart-list-items-group]'
        })
    ], ListItemsGroupComponent);
    return ListItemsGroupComponent;
}(BaseElement));

var ListBoxModule = /** @class */ (function () {
    function ListBoxModule() {
    }
    ListBoxModule = __decorate([
        NgModule({
            declarations: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
            exports: [ListBoxComponent, ListItemComponent, ListItemsGroupComponent]
        })
    ], ListBoxModule);
    return ListBoxModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { ListBoxComponent, ListBoxModule, ListItemComponent, ListItemsGroupComponent, Smart, BaseElement as ɵa };
//# sourceMappingURL=smart-webcomponents-angular-listbox.js.map
