'use strict';var _typeof='function'==typeof Symbol&&'symbol'==typeof Symbol.iterator?function(a){return typeof a}:function(a){return a&&'function'==typeof Symbol&&a.constructor===Symbol&&a!==Symbol.prototype?'symbol':typeof a},_createClass=function(){function a(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,'value'in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}return function(b,c,d){return c&&a(b.prototype,c),d&&a(b,d),b}}(),_react=require('react'),_react2=_interopRequireDefault(_react),_propTypes=require('prop-types'),_propTypes2=_interopRequireDefault(_propTypes);Object.defineProperty(exports,'__esModule',{value:!0});function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError('Cannot call a class as a function')}function _possibleConstructorReturn(a,b){if(!a)throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');return b&&('object'==typeof b||'function'==typeof b)?b:a}function _inherits(a,b){if('function'!=typeof b&&null!==b)throw new TypeError('Super expression must either be null or a function, not '+typeof b);a.prototype=Object.create(b&&b.prototype,{constructor:{value:a,enumerable:!1,writable:!0,configurable:!0}}),b&&(Object.setPrototypeOf?Object.setPrototypeOf(a,b):a.__proto__=b)}var DEFAULT_STYLE={width:'400px',height:'228px'},AMAZON_ADDRESS_BOOK_DIV_ID='addressBookWidgetDiv',AmazonAddressBook=function(a){function b(a){_classCallCheck(this,b);var c=_possibleConstructorReturn(this,(b.__proto__||Object.getPrototypeOf(b)).call(this,a));return c.onOrderReferenceCreate=c.onOrderReferenceCreate.bind(c),c.onAddressSelect=c.onAddressSelect.bind(c),c.onReady=c.onReady.bind(c),c.onError=c.onError.bind(c),c}return _inherits(b,a),_createClass(b,[{key:'onOrderReferenceCreate',value:function(a){var b=this.props.onOrderReferenceCreate;b&&b(a)}},{key:'onAddressSelect',value:function(a){var b=this.props.onAddressSelect;b&&b(a)}},{key:'onReady',value:function(a){var b=this.props.onReady;b&&b(a)}},{key:'onError',value:function(a){var b=this.props.onError;b&&b(a)}},{key:'componentDidMount',value:function componentDidMount(){var a=this.props,b=a.sellerId,c=a.agreementType;new OffAmazonPayments.Widgets.AddressBook({onOrderReferenceCreate:this.onOrderReferenceCreate,onReady:this.onReady,onAddressSelect:this.onAddressSelect,onError:this.onError,sellerId:b,agreementType:c,design:{designMode:'responsive'}}).bind('addressBookWidgetDiv')}},{key:'render',value:function render(){var a=this.props.style;return _react2.default.createElement('div',{id:'addressBookWidgetDiv',style:b.getStyle(a)})}}]),b}(_react.PureComponent);AmazonAddressBook.getStyle=function(a){return'object'===('undefined'==typeof a?'undefined':_typeof(a))?a:DEFAULT_STYLE},AmazonAddressBook.propTypes={sellerId:_propTypes2.default.string.isRequired,agreementType:_propTypes2.default.string.isRequired,style:_propTypes2.default.object,onReady:_propTypes2.default.func,onError:_propTypes2.default.func,onAddressSelect:_propTypes2.default.func,onOrderReferenceCreate:_propTypes2.default.func},exports.default=AmazonAddressBook;