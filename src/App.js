import '@grapecity/spread-sheets-designer-resources-en';
import {Designer} from '@grapecity/spread-sheets-designer-react';
import '@grapecity/spread-sheets-designer/styles/gc.spread.sheets.designer.min.css'
import '@grapecity/spread-sheets/styles/gc.spread.sheets.excel2013white.css'
import GC from '@grapecity/spread-sheets';
import { SAVE_BTN_CONFIGS, UPPERCASE_BTN_CONFIGS } from './designer/buttons';
import * as TABS from './designer/tabs';
import "./App.css"
import { useEffect } from 'react';
import { DATA } from './designer/const';

const config = GC.Spread.Sheets.Designer.DefaultConfig;
const newTabs = Object.keys(TABS).map((el) => TABS[el]);
config.ribbon.push(...newTabs);
config.ribbon[0].buttonGroups.unshift(SAVE_BTN_CONFIGS.configs);
config.commandMap = {
  ...SAVE_BTN_CONFIGS.command,
  ...UPPERCASE_BTN_CONFIGS.command,
};

export default function App() {
useEffect(() => {
  return () => {
    delete window.designer
  }
}, [])
function getDesigner(designer) {
  //this is hosted spread instance
  var workbook = designer.getWorkbook();
  workbook.fromJSON(DATA)
  window.designer =  workbook
}
  return (
      <Designer designerInitialized={designer => { getDesigner(designer) }}
      styleInfo={{ width: "100%", height: '98vh' }} config={config}></Designer >
  );
}
