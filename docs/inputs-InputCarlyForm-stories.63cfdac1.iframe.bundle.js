"use strict";(self.webpackChunkcarly_now=self.webpackChunkcarly_now||[]).push([[773],{"./node_modules/@mui/material/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return Button_Button}});var objectWithoutPropertiesLoose=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js"),esm_extends=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/extends.js"),react=__webpack_require__("./node_modules/react/index.js"),clsx=__webpack_require__("./node_modules/clsx/dist/clsx.mjs"),resolveProps=__webpack_require__("./node_modules/@mui/utils/esm/resolveProps.js"),composeClasses=__webpack_require__("./node_modules/@mui/utils/esm/composeClasses/composeClasses.js"),colorManipulator=__webpack_require__("./node_modules/@mui/system/esm/colorManipulator.js"),styled=__webpack_require__("./node_modules/@mui/material/styles/styled.js"),useThemeProps=__webpack_require__("./node_modules/@mui/material/styles/useThemeProps.js"),ButtonBase=__webpack_require__("./node_modules/@mui/material/ButtonBase/ButtonBase.js"),capitalize=__webpack_require__("./node_modules/@mui/material/utils/capitalize.js"),generateUtilityClasses=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClasses/generateUtilityClasses.js"),generateUtilityClass=__webpack_require__("./node_modules/@mui/utils/esm/generateUtilityClass/generateUtilityClass.js");function getButtonUtilityClass(slot){return(0,generateUtilityClass.Z)("MuiButton",slot)}var Button_buttonClasses=(0,generateUtilityClasses.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var ButtonGroup_ButtonGroupContext=react.createContext({});var ButtonGroup_ButtonGroupButtonContext=react.createContext(void 0),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const _excluded=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],commonIconStyles=ownerState=>(0,esm_extends.Z)({},"small"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===ownerState.size&&{"& > *:nth-of-type(1)":{fontSize:22}}),ButtonRoot=(0,styled.ZP)(ButtonBase.Z,{shouldForwardProp:prop=>(0,styled.FO)(prop)||"classes"===prop,name:"MuiButton",slot:"Root",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.root,styles[ownerState.variant],styles[`${ownerState.variant}${(0,capitalize.Z)(ownerState.color)}`],styles[`size${(0,capitalize.Z)(ownerState.size)}`],styles[`${ownerState.variant}Size${(0,capitalize.Z)(ownerState.size)}`],"inherit"===ownerState.color&&styles.colorInherit,ownerState.disableElevation&&styles.disableElevation,ownerState.fullWidth&&styles.fullWidth]}})((({theme:theme,ownerState:ownerState})=>{var _theme$palette$getCon,_theme$palette;const inheritContainedBackgroundColor="light"===theme.palette.mode?theme.palette.grey[300]:theme.palette.grey[800],inheritContainedHoverBackgroundColor="light"===theme.palette.mode?theme.palette.grey.A100:theme.palette.grey[700];return(0,esm_extends.Z)({},theme.typography.button,{minWidth:64,padding:"6px 16px",borderRadius:(theme.vars||theme).shape.borderRadius,transition:theme.transitions.create(["background-color","box-shadow","border-color","color"],{duration:theme.transitions.duration.short}),"&:hover":(0,esm_extends.Z)({textDecoration:"none",backgroundColor:theme.vars?`rgba(${theme.vars.palette.text.primaryChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette.text.primary,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{border:`1px solid ${(theme.vars||theme).palette[ownerState.color].main}`,backgroundColor:theme.vars?`rgba(${theme.vars.palette[ownerState.color].mainChannel} / ${theme.vars.palette.action.hoverOpacity})`:(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,theme.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===ownerState.variant&&{backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedHoverBg:inheritContainedHoverBackgroundColor,boxShadow:(theme.vars||theme).shadows[4],"@media (hover: none)":{boxShadow:(theme.vars||theme).shadows[2],backgroundColor:(theme.vars||theme).palette.grey[300]}},"contained"===ownerState.variant&&"inherit"!==ownerState.color&&{backgroundColor:(theme.vars||theme).palette[ownerState.color].dark,"@media (hover: none)":{backgroundColor:(theme.vars||theme).palette[ownerState.color].main}}),"&:active":(0,esm_extends.Z)({},"contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[8]}),[`&.${Button_buttonClasses.focusVisible}`]:(0,esm_extends.Z)({},"contained"===ownerState.variant&&{boxShadow:(theme.vars||theme).shadows[6]}),[`&.${Button_buttonClasses.disabled}`]:(0,esm_extends.Z)({color:(theme.vars||theme).palette.action.disabled},"outlined"===ownerState.variant&&{border:`1px solid ${(theme.vars||theme).palette.action.disabledBackground}`},"contained"===ownerState.variant&&{color:(theme.vars||theme).palette.action.disabled,boxShadow:(theme.vars||theme).shadows[0],backgroundColor:(theme.vars||theme).palette.action.disabledBackground})},"text"===ownerState.variant&&{padding:"6px 8px"},"text"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main},"outlined"===ownerState.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].main,border:theme.vars?`1px solid rgba(${theme.vars.palette[ownerState.color].mainChannel} / 0.5)`:`1px solid ${(0,colorManipulator.Fq)(theme.palette[ownerState.color].main,.5)}`},"contained"===ownerState.variant&&{color:theme.vars?theme.vars.palette.text.primary:null==(_theme$palette$getCon=(_theme$palette=theme.palette).getContrastText)?void 0:_theme$palette$getCon.call(_theme$palette,theme.palette.grey[300]),backgroundColor:theme.vars?theme.vars.palette.Button.inheritContainedBg:inheritContainedBackgroundColor,boxShadow:(theme.vars||theme).shadows[2]},"contained"===ownerState.variant&&"inherit"!==ownerState.color&&{color:(theme.vars||theme).palette[ownerState.color].contrastText,backgroundColor:(theme.vars||theme).palette[ownerState.color].main},"inherit"===ownerState.color&&{color:"inherit",borderColor:"currentColor"},"small"===ownerState.size&&"text"===ownerState.variant&&{padding:"4px 5px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"text"===ownerState.variant&&{padding:"8px 11px",fontSize:theme.typography.pxToRem(15)},"small"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"3px 9px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"outlined"===ownerState.variant&&{padding:"7px 21px",fontSize:theme.typography.pxToRem(15)},"small"===ownerState.size&&"contained"===ownerState.variant&&{padding:"4px 10px",fontSize:theme.typography.pxToRem(13)},"large"===ownerState.size&&"contained"===ownerState.variant&&{padding:"8px 22px",fontSize:theme.typography.pxToRem(15)},ownerState.fullWidth&&{width:"100%"})}),(({ownerState:ownerState})=>ownerState.disableElevation&&{boxShadow:"none","&:hover":{boxShadow:"none"},[`&.${Button_buttonClasses.focusVisible}`]:{boxShadow:"none"},"&:active":{boxShadow:"none"},[`&.${Button_buttonClasses.disabled}`]:{boxShadow:"none"}})),ButtonStartIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.startIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===ownerState.size&&{marginLeft:-2},commonIconStyles(ownerState)))),ButtonEndIcon=(0,styled.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(props,styles)=>{const{ownerState:ownerState}=props;return[styles.endIcon,styles[`iconSize${(0,capitalize.Z)(ownerState.size)}`]]}})((({ownerState:ownerState})=>(0,esm_extends.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===ownerState.size&&{marginRight:-2},commonIconStyles(ownerState))));var Button_Button=react.forwardRef((function Button(inProps,ref){const contextProps=react.useContext(ButtonGroup_ButtonGroupContext),buttonGroupButtonContextPositionClassName=react.useContext(ButtonGroup_ButtonGroupButtonContext),resolvedProps=(0,resolveProps.Z)(contextProps,inProps),props=(0,useThemeProps.Z)({props:resolvedProps,name:"MuiButton"}),{children:children,color:color="primary",component:component="button",className:className,disabled:disabled=!1,disableElevation:disableElevation=!1,disableFocusRipple:disableFocusRipple=!1,endIcon:endIconProp,focusVisibleClassName:focusVisibleClassName,fullWidth:fullWidth=!1,size:size="medium",startIcon:startIconProp,type:type,variant:variant="text"}=props,other=(0,objectWithoutPropertiesLoose.Z)(props,_excluded),ownerState=(0,esm_extends.Z)({},props,{color:color,component:component,disabled:disabled,disableElevation:disableElevation,disableFocusRipple:disableFocusRipple,fullWidth:fullWidth,size:size,type:type,variant:variant}),classes=(ownerState=>{const{color:color,disableElevation:disableElevation,fullWidth:fullWidth,size:size,variant:variant,classes:classes}=ownerState,slots={root:["root",variant,`${variant}${(0,capitalize.Z)(color)}`,`size${(0,capitalize.Z)(size)}`,`${variant}Size${(0,capitalize.Z)(size)}`,"inherit"===color&&"colorInherit",disableElevation&&"disableElevation",fullWidth&&"fullWidth"],label:["label"],startIcon:["startIcon",`iconSize${(0,capitalize.Z)(size)}`],endIcon:["endIcon",`iconSize${(0,capitalize.Z)(size)}`]},composedClasses=(0,composeClasses.Z)(slots,getButtonUtilityClass,classes);return(0,esm_extends.Z)({},classes,composedClasses)})(ownerState),startIcon=startIconProp&&(0,jsx_runtime.jsx)(ButtonStartIcon,{className:classes.startIcon,ownerState:ownerState,children:startIconProp}),endIcon=endIconProp&&(0,jsx_runtime.jsx)(ButtonEndIcon,{className:classes.endIcon,ownerState:ownerState,children:endIconProp}),positionClassName=buttonGroupButtonContextPositionClassName||"";return(0,jsx_runtime.jsxs)(ButtonRoot,(0,esm_extends.Z)({ownerState:ownerState,className:(0,clsx.Z)(contextProps.className,classes.root,className,positionClassName),component:component,disabled:disabled,focusRipple:!disableFocusRipple,focusVisibleClassName:(0,clsx.Z)(classes.focusVisible,focusVisibleClassName),ref:ref,type:type},other,{classes:classes,children:[startIcon,children,endIcon]}))}))},"./src/stories/inputs/InputCarlyForm.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{FormValidation:function(){return FormValidation},__namedExportsOrder:function(){return __namedExportsOrder}});var _FormValidation$param,_FormValidation$param2,_FormValidation$param3,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectSpread2.js"),C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_mui_material__WEBPACK_IMPORTED_MODULE_6__=(__webpack_require__("./node_modules/lodash/lodash.js"),__webpack_require__("./node_modules/@mui/material/Box/Box.js")),_mui_material__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@mui/material/Button/Button.js"),src_hooks__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./src/hooks/index.ts"),src_components_inputs__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./src/components/inputs/index.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/react/jsx-runtime.js");__webpack_exports__.default={title:"inputs/InputCarly"};var FormValidation=function FormValidation(){var _useState=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),_useState2=(0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_slicedToArray_js__WEBPACK_IMPORTED_MODULE_5__.Z)(_useState,2),value=_useState2[0],setValue=_useState2[1],_useForm=(0,src_hooks__WEBPACK_IMPORTED_MODULE_2__.cI)({formTest:value,formTest2:value}),formObj=_useForm.formObj,handleSubmit=_useForm.handleSubmit;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_mui_material__WEBPACK_IMPORTED_MODULE_6__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:" onChange handler "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_inputs__WEBPACK_IMPORTED_MODULE_3__.hL,{name:"formTest",formObj:formObj,rules:{required:"formTest is a required field",validate:{testFailure:function testFailure(value){return"test failure message: ".concat(value)}}},onChange:function onChange(value){return setValue(value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("li",{children:" onBlur handler "}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(src_components_inputs__WEBPACK_IMPORTED_MODULE_3__.hL,{name:"formTest2",formObj:formObj,rules:{required:"formTest is a required field",validate:{testFailure:function testFailure(value){return"test failure message: ".concat(value)}}},onBlur:function onBlur(value){return setValue(value)}}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("li",{children:[" form validation check, value: ",value," "]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_mui_material__WEBPACK_IMPORTED_MODULE_7__.Z,{onClick:handleSubmit((function(){})),children:"Validate"})]})};FormValidation.parameters=(0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},FormValidation.parameters),{},{docs:(0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)((0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({},null===(_FormValidation$param=FormValidation.parameters)||void 0===_FormValidation$param?void 0:_FormValidation$param.docs),{},{source:(0,C_Users_Eric_Li_Documents_carly_now_node_modules_babel_runtime_helpers_esm_objectSpread2_js__WEBPACK_IMPORTED_MODULE_8__.Z)({originalSource:"() => {\n  const [value, setValue] = useState();\n  const {\n    formObj,\n    handleSubmit\n  } = useForm({\n    formTest: value,\n    formTest2: value\n  });\n  return <Box>\r\n      <li> onChange handler </li>\r\n      <InputCarly name=\"formTest\" formObj={formObj} rules={{\n      required: 'formTest is a required field',\n      validate: {\n        testFailure: value => `test failure message: ${value}`\n      }\n    }} onChange={value => setValue(value)} />\r\n\r\n\r\n      <li> onBlur handler </li>\r\n      <InputCarly name=\"formTest2\" formObj={formObj} rules={{\n      required: 'formTest is a required field',\n      validate: {\n        testFailure: value => `test failure message: ${value}`\n      }\n    }} onBlur={value => setValue(value)} />\r\n\r\n      <li> form validation check, value: {value} </li>\r\n      <Button onClick={handleSubmit(() => {})}>\r\n        Validate\r\n      </Button>\r\n\r\n    </Box>;\n}"},null===(_FormValidation$param2=FormValidation.parameters)||void 0===_FormValidation$param2||null===(_FormValidation$param3=_FormValidation$param2.docs)||void 0===_FormValidation$param3?void 0:_FormValidation$param3.source)})});var __namedExportsOrder=["FormValidation"];FormValidation.__docgenInfo={description:"",methods:[],displayName:"FormValidation"}}}]);