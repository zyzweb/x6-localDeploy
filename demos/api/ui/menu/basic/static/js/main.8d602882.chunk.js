(this["webpackJsonp@antv/x6-sites-demos-api.ui.menu.basic"]=this["webpackJsonp@antv/x6-sites-demos-api.ui.menu.basic"]||[]).push([[0],{82:function(f,p,a){f.exports=a(99)},87:function(f,p,a){},93:function(f,p,a){},94:function(f,p,a){"use strict";a.r(p),a.d(p,"host",function(){return D}),a.d(p,"getCodeSandboxParams",function(){return e}),a.d(p,"getStackblitzPrefillConfig",function(){return R});const D="https://github.com/antvis/X6/tree/master/sites/x6-sites-demos/packages/api/ui/menu/basic";function e(){return{files:{"package.json":{isBinary:!1,content:`{
  "dependencies": {
    "@antv/x6-react-components": "latest",
    "antd": "^4.4.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "^3.4.1"
  },
  "devDependencies": {
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.5",
    "typescript": "^4.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`},".gitignore":{content:`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,isBinary:!1},"public/index.html":{content:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,isBinary:!1},"src/app.tsx":{content:`import React from 'react'
import { message } from 'antd'
import { Menu } from '@antv/x6-react-components'
import 'antd/dist/antd.css'
import '@antv/x6-react-components/es/menu/style/index.css'
import {
  UndoOutlined,
  RedoOutlined,
  ScissorOutlined,
  CopyOutlined,
  SnippetsOutlined,
  DeleteOutlined,
  DesktopOutlined,
  FullscreenOutlined,
  ControlOutlined,
} from '@ant-design/icons'

const MenuItem = Menu.Item // eslint-disable-line
const SubMenu = Menu.SubMenu
const Divider = Menu.Divider

export default class Example extends React.Component {
  onMenuClick = (name: string) => {
    message.success(\`\${name} clicked\`, 10)
  }

  onMenuItemClick = () => {
    this.onMenuClick('undo')
  }

  render() {
    return (
      <div style={{ padding: '24px 0 210px 24px' }}>
        <div style={{ display: 'inline-block' }}>
          <Menu onClick={this.onMenuClick}>
            <MenuItem onClick={this.onMenuItemClick} name="undo" hotkey="Cmd+Z">
              Undo
            </MenuItem>
            <MenuItem name="redo" hotkey="Cmd+Shift+Z">
              Redo
            </MenuItem>
            <Divider />
            <MenuItem name="cut" hotkey="Cmd+X">
              Cut
            </MenuItem>
            <MenuItem name="copy" hotkey="Cmd+C">
              Copy
            </MenuItem>
            <MenuItem name="paste" hotkey="Cmd+V" disabled={true}>
              Paste
            </MenuItem>
            <MenuItem name="delete" hotkey="Delete">
              Delete
            </MenuItem>
            <Divider />
            <SubMenu text="Appearance">
              <MenuItem name="fullscreen" hotkey="Cmd+Shift+F">
                Full Screen
              </MenuItem>
              <MenuItem name="zen" hotkey="Cmd+K Z">
                Zen Mode
              </MenuItem>
              <Divider />
              <MenuItem name="side-bar">Show Side Bar</MenuItem>
              <MenuItem name="status-bar">Show Status Bar</MenuItem>
              <MenuItem name="activity-bar">Show Activity Bar</MenuItem>
              <MenuItem name="editor-area">Show Editor Area</MenuItem>
              <MenuItem name="show-panel">Show Panel</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div style={{ display: 'inline-block', marginLeft: 32 }}>
          <Menu hasIcon={true} onClick={this.onMenuClick}>
            <MenuItem
              onClick={this.onMenuItemClick}
              name="undo"
              icon={<UndoOutlined />}
              hotkey="Cmd+Z"
              text="Undo"
              active={true}
            />
            <MenuItem
              name="redo"
              icon={<RedoOutlined />}
              hotkey="Cmd+Shift+Z"
              text="Redo"
            />
            <Divider />
            <MenuItem
              name="cut"
              icon={<ScissorOutlined />}
              hotkey="Cmd+X"
              text="Cut"
            />
            <MenuItem
              name="copy"
              icon={<CopyOutlined />}
              hotkey="Cmd+C"
              text="Copy"
            />
            <MenuItem
              name="paste"
              icon={<SnippetsOutlined />}
              hotkey="Cmd+V"
              disabled={true}
              text="Paste"
            />
            <MenuItem
              name="delete"
              icon={<DeleteOutlined />}
              hotkey="Delete"
              text="Delete"
            />
            <Divider />
            <SubMenu text="Appearance" icon={<ControlOutlined />} active={true}>
              <MenuItem
                name="zen"
                icon={<DesktopOutlined />}
                hotkey="Cmd+K Z"
                text="Zen Mode"
              />
              <MenuItem
                name="fullscreen"
                icon={<FullscreenOutlined />}
                hotkey="Cmd+Shift+F"
                text="Full Screen"
              />
              <Divider />
              <MenuItem name="side-bar" text="Show Side Bar" />
              <MenuItem name="status-bar" text="Show Status Bar" />
              <MenuItem name="activity-bar" text="Show Activity Bar" />
              <MenuItem name="editor-area" text="Show Editor Area" />
              <MenuItem name="show-panel" text="Show Panel" />
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
`,isBinary:!1},"src/index.css":{content:`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,isBinary:!1},"src/index.tsx":{content:`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,isBinary:!1},"tsconfig.json":{content:`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`,isBinary:!1}}}}function R(){return{title:"api/ui/menu/basic",description:"",template:"create-react-app",dependencies:{"@antv/x6-react-components":"latest",antd:"^4.4.2",react:"^16.13.1","react-dom":"^16.13.1","react-scripts":"^3.4.1"},files:{"package.json":`{
  "dependencies": {
    "@antv/x6-react-components": "latest",
    "antd": "^4.4.2",
    "react": "^16.13.1",
    "react-dom": "^16.13.1",
    "react-scripts": "^3.4.1"
  },
  "devDependencies": {
    "@types/react": "^16.9.19",
    "@types/react-dom": "^16.9.5",
    "typescript": "^4.1.2"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": "react-app"
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  }
}`,".gitignore":`# See https://help.github.com/articles/ignoring-files/ for more about ignoring files.

# dependencies
/node_modules
react-app-env.d.ts
/.pnp
.pnp.js

# testing
/coverage

# production
/build

# misc
.DS_Store
.env.local
.env.development.local
.env.test.local
.env.production.local

npm-debug.log*
yarn-debug.log*
yarn-error.log*
`,"public/index.html":`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1, shrink-to-fit=no"
    />
    <title></title>
  </head>
  <body>
    <noscript> You need to enable JavaScript to run this app. </noscript>
    <div id="root"></div>
  </body>
</html>
`,"src/app.tsx":`import React from 'react'
import { message } from 'antd'
import { Menu } from '@antv/x6-react-components'
import 'antd/dist/antd.css'
import '@antv/x6-react-components/es/menu/style/index.css'
import {
  UndoOutlined,
  RedoOutlined,
  ScissorOutlined,
  CopyOutlined,
  SnippetsOutlined,
  DeleteOutlined,
  DesktopOutlined,
  FullscreenOutlined,
  ControlOutlined,
} from '@ant-design/icons'

const MenuItem = Menu.Item // eslint-disable-line
const SubMenu = Menu.SubMenu
const Divider = Menu.Divider

export default class Example extends React.Component {
  onMenuClick = (name: string) => {
    message.success(\`\${name} clicked\`, 10)
  }

  onMenuItemClick = () => {
    this.onMenuClick('undo')
  }

  render() {
    return (
      <div style={{ padding: '24px 0 210px 24px' }}>
        <div style={{ display: 'inline-block' }}>
          <Menu onClick={this.onMenuClick}>
            <MenuItem onClick={this.onMenuItemClick} name="undo" hotkey="Cmd+Z">
              Undo
            </MenuItem>
            <MenuItem name="redo" hotkey="Cmd+Shift+Z">
              Redo
            </MenuItem>
            <Divider />
            <MenuItem name="cut" hotkey="Cmd+X">
              Cut
            </MenuItem>
            <MenuItem name="copy" hotkey="Cmd+C">
              Copy
            </MenuItem>
            <MenuItem name="paste" hotkey="Cmd+V" disabled={true}>
              Paste
            </MenuItem>
            <MenuItem name="delete" hotkey="Delete">
              Delete
            </MenuItem>
            <Divider />
            <SubMenu text="Appearance">
              <MenuItem name="fullscreen" hotkey="Cmd+Shift+F">
                Full Screen
              </MenuItem>
              <MenuItem name="zen" hotkey="Cmd+K Z">
                Zen Mode
              </MenuItem>
              <Divider />
              <MenuItem name="side-bar">Show Side Bar</MenuItem>
              <MenuItem name="status-bar">Show Status Bar</MenuItem>
              <MenuItem name="activity-bar">Show Activity Bar</MenuItem>
              <MenuItem name="editor-area">Show Editor Area</MenuItem>
              <MenuItem name="show-panel">Show Panel</MenuItem>
            </SubMenu>
          </Menu>
        </div>
        <div style={{ display: 'inline-block', marginLeft: 32 }}>
          <Menu hasIcon={true} onClick={this.onMenuClick}>
            <MenuItem
              onClick={this.onMenuItemClick}
              name="undo"
              icon={<UndoOutlined />}
              hotkey="Cmd+Z"
              text="Undo"
              active={true}
            />
            <MenuItem
              name="redo"
              icon={<RedoOutlined />}
              hotkey="Cmd+Shift+Z"
              text="Redo"
            />
            <Divider />
            <MenuItem
              name="cut"
              icon={<ScissorOutlined />}
              hotkey="Cmd+X"
              text="Cut"
            />
            <MenuItem
              name="copy"
              icon={<CopyOutlined />}
              hotkey="Cmd+C"
              text="Copy"
            />
            <MenuItem
              name="paste"
              icon={<SnippetsOutlined />}
              hotkey="Cmd+V"
              disabled={true}
              text="Paste"
            />
            <MenuItem
              name="delete"
              icon={<DeleteOutlined />}
              hotkey="Delete"
              text="Delete"
            />
            <Divider />
            <SubMenu text="Appearance" icon={<ControlOutlined />} active={true}>
              <MenuItem
                name="zen"
                icon={<DesktopOutlined />}
                hotkey="Cmd+K Z"
                text="Zen Mode"
              />
              <MenuItem
                name="fullscreen"
                icon={<FullscreenOutlined />}
                hotkey="Cmd+Shift+F"
                text="Full Screen"
              />
              <Divider />
              <MenuItem name="side-bar" text="Show Side Bar" />
              <MenuItem name="status-bar" text="Show Status Bar" />
              <MenuItem name="activity-bar" text="Show Activity Bar" />
              <MenuItem name="editor-area" text="Show Editor Area" />
              <MenuItem name="show-panel" text="Show Panel" />
            </SubMenu>
          </Menu>
        </div>
      </div>
    )
  }
}
`,"src/index.css":`body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
`,"src/index.tsx":`import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

ReactDOM.render(<App />, document.getElementById('root'))`,"tsconfig.json":`{
  "compilerOptions": {
    "allowJs": true,
    "strict": true,
    "isolatedModules": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "strictPropertyInitialization": false,
    "noEmit": true,
    "module": "esnext",
    "moduleResolution": "node",
    "sourceMap": true,
    "declaration": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "noImplicitAny": true,
    "noEmitOnError": true,
    "noUnusedLocals": true,
    "strictNullChecks": true,
    "resolveJsonModule": true,
    "experimentalDecorators": true,
    "jsx": "react",
    "target": "es5",
    "lib": [
      "dom",
      "es2015"
    ]
  },
  "include": [
    "src"
  ]
}
`}}}},97:function(f,p,a){},99:function(f,p,a){"use strict";a.r(p);var D=a(0),e=a.n(D),R=a(17),P=a.n(R),C=a(20),y=a(21),M=a(24),x=a(23),L=a(80),O=a(35),A=a(7),X=a.n(A),b=e.a.createContext({}),k=function(r){Object(M.a)(o,r);var s=Object(x.a)(o);function o(){var n;return Object(C.a)(this,o),n=s.apply(this,arguments),n.onHotkey=function(){n.triggerHandler()},n.onClick=function(t){n.triggerHandler(t)},n}return Object(y.a)(o,[{key:"componentDidMount",value:function(){var t=this.props.hotkey;t&&this.props.context.registerHotkey(t,this.onHotkey)}},{key:"componentWillUnmount",value:function(){var t=this.props.hotkey;t&&this.props.context.unregisterHotkey(t,this.onHotkey)}},{key:"triggerHandler",value:function(t){!this.props.disabled&&!this.props.hidden&&(this.props.name&&this.props.context.onClick(this.props.name,t),this.props.onClick&&this.props.onClick())}},{key:"render",value:function(){return e.a.createElement("div",Object.assign({},o.getProps(this.props)),o.getContent(this.props,this.onClick))}}]),o}(e.a.PureComponent);(function(r){function s(n,t){var i,l=n.className,u=n.disabled,m=n.active,d=n.hidden,g=n.context.prefixCls,h="".concat(g,"-item");return{className:X()(h,t,(i={},Object(O.a)(i,"".concat(h,"-active"),m),Object(O.a)(i,"".concat(h,"-hidden"),d),Object(O.a)(i,"".concat(h,"-disabled"),u),i),l)}}r.getProps=s;function o(n,t,i,l){var u=n.icon,m=n.text,d=n.hotkey,g=n.children,h=n.context.prefixCls,I="".concat(h,"-item");return e.a.createElement(e.a.Fragment,null,e.a.createElement("button",{type:"button",className:"".concat(I,"-button"),onClick:t},u&&e.a.isValidElement(u)&&e.a.createElement("span",{className:"".concat(I,"-icon")},u),e.a.createElement("span",{className:"".concat(I,"-text")},m||g),d&&e.a.createElement("span",{className:"".concat(I,"-hotkey")},d),i),l)}r.getContent=o})(k||(k={}));var N=function(s){return e.a.createElement(b.Consumer,null,function(o){return e.a.createElement(k,Object.assign({context:o},s))})},j=function(){return e.a.createElement(b.Consumer,null,function(s){var o=s.prefixCls;return e.a.createElement("div",{className:"".concat(o,"-item ").concat(o,"-item-divider")})})},T=function(r,s){var o={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&s.indexOf(n)<0&&(o[n]=r[n]);if(r!=null&&typeof Object.getOwnPropertySymbols=="function")for(var t=0,n=Object.getOwnPropertySymbols(r);t<n.length;t++)s.indexOf(n[t])<0&&Object.prototype.propertyIsEnumerable.call(r,n[t])&&(o[n[t]]=r[n[t]]);return o},B=function(s){var o=s.hotkey,n=s.children,t=T(s,["hotkey","children"]);return e.a.createElement(b.Consumer,null,function(i){var l=i.prefixCls,u=k.getProps(Object.assign({context:i},s),"".concat(l,"-submenu"));return e.a.createElement("div",Object.assign({},u),k.getContent(Object.assign({context:i},t),null,e.a.createElement("span",{className:"".concat(l,"-submenu-arrow")}),e.a.createElement("div",{className:"".concat(l,"-submenu-menu")},n)))})},E=function(r){Object(M.a)(o,r);var s=Object(x.a)(o);function o(){var n;return Object(C.a)(this,o),n=s.apply(this,arguments),n.onClick=function(t,i){n.props.stopPropagation&&i!=null&&i.stopPropagation(),n.props.onClick&&n.props.onClick(t)},n.registerHotkey=function(t,i){n.props.registerHotkey&&n.props.registerHotkey(t,i)},n.unregisterHotkey=function(t,i){n.props.unregisterHotkey&&n.props.unregisterHotkey(t,i)},n}return Object(y.a)(o,[{key:"render",value:function(){var t=this.props,i=t.prefixCls,l=t.className,u=t.children,m=t.hasIcon,d="".concat(i,"-menu"),g=b.Provider,h={prefixCls:d,onClick:this.onClick,registerHotkey:this.registerHotkey,unregisterHotkey:this.unregisterHotkey};return e.a.createElement("div",{className:X()(d,Object(O.a)({},"".concat(d,"-has-icon"),m),l)},e.a.createElement(g,{value:h},u))}}]),o}(e.a.PureComponent);(function(r){r.Item=N,r.Divider=j,r.SubMenu=B,r.defaultProps={prefixCls:"x6",stopPropagation:!1}})(E||(E={}));var se=a(62),le=a(87),z=a(105),H=a(106),F=a(107),Z=a(108),V=a(109),J=a(110),K=a(111),W=a(112),Y=a(113),c=E.Item,_=E.SubMenu,v=E.Divider,G=function(r){Object(M.a)(o,r);var s=Object(x.a)(o);function o(){var n;Object(C.a)(this,o);for(var t=arguments.length,i=new Array(t),l=0;l<t;l++)i[l]=arguments[l];return n=s.call.apply(s,[this].concat(i)),n.onMenuClick=function(u){L.b.success("".concat(u," clicked"),10)},n.onMenuItemClick=function(){n.onMenuClick("undo")},n}return Object(y.a)(o,[{key:"render",value:function(){return e.a.createElement("div",{style:{padding:"24px 0 210px 24px"}},e.a.createElement("div",{style:{display:"inline-block"}},e.a.createElement(E,{onClick:this.onMenuClick},e.a.createElement(c,{onClick:this.onMenuItemClick,name:"undo",hotkey:"Cmd+Z"},"Undo"),e.a.createElement(c,{name:"redo",hotkey:"Cmd+Shift+Z"},"Redo"),e.a.createElement(v,null),e.a.createElement(c,{name:"cut",hotkey:"Cmd+X"},"Cut"),e.a.createElement(c,{name:"copy",hotkey:"Cmd+C"},"Copy"),e.a.createElement(c,{name:"paste",hotkey:"Cmd+V",disabled:!0},"Paste"),e.a.createElement(c,{name:"delete",hotkey:"Delete"},"Delete"),e.a.createElement(v,null),e.a.createElement(_,{text:"Appearance"},e.a.createElement(c,{name:"fullscreen",hotkey:"Cmd+Shift+F"},"Full Screen"),e.a.createElement(c,{name:"zen",hotkey:"Cmd+K Z"},"Zen Mode"),e.a.createElement(v,null),e.a.createElement(c,{name:"side-bar"},"Show Side Bar"),e.a.createElement(c,{name:"status-bar"},"Show Status Bar"),e.a.createElement(c,{name:"activity-bar"},"Show Activity Bar"),e.a.createElement(c,{name:"editor-area"},"Show Editor Area"),e.a.createElement(c,{name:"show-panel"},"Show Panel")))),e.a.createElement("div",{style:{display:"inline-block",marginLeft:32}},e.a.createElement(E,{hasIcon:!0,onClick:this.onMenuClick},e.a.createElement(c,{onClick:this.onMenuItemClick,name:"undo",icon:e.a.createElement(z.a,null),hotkey:"Cmd+Z",text:"Undo",active:!0}),e.a.createElement(c,{name:"redo",icon:e.a.createElement(H.a,null),hotkey:"Cmd+Shift+Z",text:"Redo"}),e.a.createElement(v,null),e.a.createElement(c,{name:"cut",icon:e.a.createElement(F.a,null),hotkey:"Cmd+X",text:"Cut"}),e.a.createElement(c,{name:"copy",icon:e.a.createElement(Z.a,null),hotkey:"Cmd+C",text:"Copy"}),e.a.createElement(c,{name:"paste",icon:e.a.createElement(V.a,null),hotkey:"Cmd+V",disabled:!0,text:"Paste"}),e.a.createElement(c,{name:"delete",icon:e.a.createElement(J.a,null),hotkey:"Delete",text:"Delete"}),e.a.createElement(v,null),e.a.createElement(_,{text:"Appearance",icon:e.a.createElement(K.a,null),active:!0},e.a.createElement(c,{name:"zen",icon:e.a.createElement(W.a,null),hotkey:"Cmd+K Z",text:"Zen Mode"}),e.a.createElement(c,{name:"fullscreen",icon:e.a.createElement(Y.a,null),hotkey:"Cmd+Shift+F",text:"Full Screen"}),e.a.createElement(v,null),e.a.createElement(c,{name:"side-bar",text:"Show Side Bar"}),e.a.createElement(c,{name:"status-bar",text:"Show Status Bar"}),e.a.createElement(c,{name:"activity-bar",text:"Show Activity Bar"}),e.a.createElement(c,{name:"editor-area",text:"Show Editor Area"}),e.a.createElement(c,{name:"show-panel",text:"Show Panel"})))))}}]),o}(e.a.Component),$=a(114),Q=a(102),q=a(115),ee=a(116),S=a(103),ne=a(70),ce=a(93),w=a(94),te=function(){return e.a.createElement("svg",{width:"15",height:"12",viewBox:"0 0 15 12",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.a.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M14.4545 0H10.5C10.1988 0 10 0.198754 10 0.5C10 0.801246 10.1988 1 10.5 1H13L9.5 4.5L10.5 5.5L14 2V4.5C14 4.80125 14.1988 5 14.5 5C14.8012 5 15 4.80125 15 4.5V0.545455C15 0.244208 14.7558 0 14.4545 0ZM1.73333 1H8.00001V1.86667H1.73333C1.25469 1.86667 0.866667 2.25469 0.866667 2.73333V9.32003C0.866667 9.79868 1.25469 10.1867 1.73333 10.1867H12.1333C12.612 10.1867 13 9.79868 13 9.32004V7.00003H13.8667V9.32004C13.8667 10.2773 13.0906 11.0534 12.1333 11.0534H1.73333C0.776041 11.0534 0 10.2773 0 9.32003V2.73333C0 1.77604 0.77604 1 1.73333 1Z",fill:"currentcolor"}))},oe=function(r){Object(M.a)(o,r);var s=Object(x.a)(o);function o(){return Object(C.a)(this,o),s.apply(this,arguments)}return Object(y.a)(o,[{key:"render",value:function(){return e.a.createElement("div",{className:"demo-toolbar"},e.a.createElement(S.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u91CD\u65B0\u52A0\u8F7D",mouseEnterDelay:.5},e.a.createElement($.a,{onClick:function(){window.location.reload()}})),window.frameElement&&e.a.createElement(S.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u5728\u65B0\u7A97\u53E3\u6253\u5F00",mouseEnterDelay:.5},e.a.createElement("a",{href:"".concat(window.location.href),rel:"noopener noreferrer",target:"_blank"},e.a.createElement(Q.a,{component:te}))),e.a.createElement(S.a,{placement:"bottomLeft",arrowPointAtCenter:!0,title:"\u5728 Github \u4E2D\u67E5\u770B",mouseEnterDelay:.5},e.a.createElement("a",{href:"".concat(w.host),rel:"noopener noreferrer",target:"_blank"},e.a.createElement(q.a,null))),e.a.createElement(S.a,{arrowPointAtCenter:!0,placement:"bottomLeft",title:"\u5728 CodeSandbox \u4E2D\u6253\u5F00",mouseEnterDelay:.5},e.a.createElement("form",{action:"https://codesandbox.io/api/v1/sandboxes/define",method:"POST",target:"_blank"},e.a.createElement("input",{type:"hidden",name:"parameters",value:Object(ne.getParameters)(w.getCodeSandboxParams())}),e.a.createElement("button",{type:"submit"},e.a.createElement(ee.a,null)))))}}]),o}(e.a.Component),ae=a(104),re=a(76),ue=a(97),U=function(r){Object(M.a)(o,r);var s=Object(x.a)(o);function o(n){var t;return Object(C.a)(this,o),t=s.call(this,n),t.refContainer=function(i){t.container=i},o.restoreIframeSize(),t}return Object(y.a)(o,[{key:"componentDidMount",value:function(){var t=this;if(this.updateIframeSize(),window.ResizeObserver){var i=new window.ResizeObserver(function(){t.updateIframeSize()});i.observe(this.container)}else window.addEventListener("resize",function(){return t.updateIframeSize()});setTimeout(function(){var l=document.getElementById("loading");l&&l.parentNode&&l.parentNode.removeChild(l)},1e3)}},{key:"updateIframeSize",value:function(){var t=window.frameElement;if(t){var i=this.container.scrollHeight||this.container.clientHeight;t.style.width="100%",t.style.height="".concat(i+16,"px"),t.style.border="0",t.style.overflow="hidden",o.saveIframeSize()}}},{key:"render",value:function(){return e.a.createElement("div",{className:"demo-wrap",ref:this.refContainer},e.a.createElement(oe,null),this.props.children)}}]),o}(e.a.Component);(function(r){var s=window.location.pathname,o="x6-iframe-size";function n(){var l=localStorage.getItem(o),u;if(l)try{u=JSON.parse(l)}catch(m){}else u={};return u}function t(){var l=window.frameElement;if(l){var u=l.style,m={width:u.width,height:u.height},d=n();d[s]=m,localStorage.setItem(o,JSON.stringify(d))}}r.saveIframeSize=t;function i(){var l=window.frameElement;if(l){var u=n(),m=u[s];m&&(l.style.width=m.width||"100%",l.style.height=m.height||"auto")}}r.restoreIframeSize=i})(U||(U={}));var me=a(98),ie=function(s){var o=s.children;return e.a.createElement(ae.a.ErrorBoundary,null,e.a.createElement(re.a,null,e.a.createElement("link",{rel:"icon",href:"/favicon-32x32.png",type:"image/png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"48x48",href:"/icons/icon-48x48.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/icons/icon-72x72.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"96x96",href:"/icons/icon-96x96.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/icons/icon-144x144.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"192x192",href:"/icons/icon-192x192.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"256x256",href:"/icons/icon-256x256.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"384x384",href:"/icons/icon-384x384.png"}),e.a.createElement("link",{rel:"apple-touch-icon",sizes:"512x512",href:"/icons/icon-512x512.png"}),e.a.createElement("link",{rel:"manifest",href:"/manifest.webmanifest"}),e.a.createElement("link",{rel:"sitemap",type:"application/xml",href:"/sitemap.xml"})),e.a.createElement(U,null,o))};P.a.render(e.a.createElement(ie,null,e.a.createElement(G,null)),document.getElementById("root"))}},[[82,1,2]]]);
