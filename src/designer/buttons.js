import GC from "@grapecity/spread-sheets";

export const SAVE_BTN_CONFIGS = {
    configs: {
      label: "Custom Actions",
      thumbnailClass: "cmdSaveData",
      commandGroup: {
        children: [
          {
            direction: "vertical",
            commands: ["cmdSaveData"],
          },
        ],
      },
    },
    command: {
      cmdSaveData: {
        title: "Save data to server",
        text: "Save",
        iconClass: "cmdSaveData",
        bigButton: "true",
        commandName: "cmdSaveData",
        execute: async (context, propertyName, fontItalicChecked) => {
          // customize operator
          handleSaveData()
        },
      },
    },
  };
  
  export const UPPERCASE_BTN_CONFIGS = {
    configs: {
      label: "Letters",
      thumbnailClass: "",
      commandGroup: {
        children: [
          {
            direction: "vertical",
            commands: ["cmdUppercase"],
          },
        ],
      },
    },
    command: {
      cmdUppercase: {
        title: "Uppercase",
        text: "Uppercase",
        iconClass: "icon-uppercase",
        bigButton: "true",
        commandName: "cmdUppercase",
        execute: async (context, propertyName, fontItalicChecked) => {
          handleUpperCase();
        },
      },
    },
  };
  
  function handleUpperCase() {
    const activeSheet = window.designer.getActiveSheet();
    // const wb = new GC.Spread.Sheets.Workbook()
    // const sheet = wb.getActiveSheet();
    const activeRow = activeSheet.getActiveRowIndex()
    const activeCol = activeSheet.getActiveColumnIndex()
    const valueActive = activeSheet.getValue(activeRow, activeCol);
    console.log({activeRow, activeCol, valueActive});
    valueActive && activeSheet.setValue(activeRow, activeCol, (valueActive + "").toUpperCase())
  }
  
  function handleSaveData() {
    const workBook = window.designer
    // const wb = new GC.Spread.Sheets.Workbook()
    // const sheet = wb.getActiveSheet();
    const dataJSON = workBook.toJSON()
    console.log(dataJSON);

  }