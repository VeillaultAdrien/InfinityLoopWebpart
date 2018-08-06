import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import {
  BaseClientSideWebPart,
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
} from '@microsoft/sp-webpart-base';

import * as strings from 'GraphWebPartStrings';
import Graph from './components/Graph';
import { IGraphProps } from './components/IGraphProps';
import { PropertyFieldColorPickerMini } from 'sp-client-custom-fields/lib/PropertyFieldColorPickerMini';
import { PropertyFieldCustomList, CustomListFieldType } from 'sp-client-custom-fields/lib/PropertyFieldCustomList';

export interface IGraphWebPartProps {
  description: string;
  //element 1
  textField1: string;
  color1: string;
  windowTitle1: string;
  windowDescription1: string;
  windowLink1: string;
  colorText1: string;
  //element 2
  textField2: string;
  color2: string;
  windowTitle2: string;
  windowDescription2: string;
  windowLink2: string;
  colorText2: string;
  //element 3
  textField3: string;
  color3: string;
  windowTitle3: string;
  windowDescription3: string;
  windowLink3: string;
  colorText3: string;
  //element4
  textField4: string;
  color4: string;
  windowTitle4: string;
  windowDescription4: string;
  windowLink4: string;
  colorText4: string;
  //element5
  textField5: string;
  color5: string;
  windowTitle5: string;
  windowDescription5: string;
  windowLink5: string;
  colorText5: string;
  //element 6
  textField6: string;
  color6: string;
  windowTitle6: string;
  windowDescription6: string;
  windowLink6: string;
  colorText6: string;
  //element 7
  textField7: string;
  color7: string;
  windowTitle7: string;
  windowDescription7: string;
  windowLink7: string;
  colorText7: string;
  //element8
  textField8: string;
  color8: string;
  windowTitle8: string;
  windowDescription8: string;
  windowLink8: string;
  colorText8: string;
}

export interface IMyWebPartProps {
  customList: any;
}

export default class GraphWebPart extends BaseClientSideWebPart<IGraphWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IGraphProps> = React.createElement(
      Graph,
      {
        description: this.properties.description,
        //element 1
        textField1: this.properties.textField1,
        color1: this.properties.color1,
        windowTitle1: this.properties.windowTitle1,
        windowDescription1: this.properties.windowDescription1,
        windowLink1: this.properties.windowLink1,
        colorText1: this.properties.colorText1,
        //element 2
        textField2: this.properties.textField2,
        color2: this.properties.color2,
        windowTitle2: this.properties.windowTitle2,
        windowDescription2: this.properties.windowDescription2,
        windowLink2: this.properties.windowLink2,
        colorText2: this.properties.colorText2,
        //element 3
        textField3: this.properties.textField3,
        color3: this.properties.color3,
        windowTitle3: this.properties.windowTitle3,
        windowDescription3: this.properties.windowDescription3,
        windowLink3: this.properties.windowLink3,
        colorText3: this.properties.colorText3,
        //element 4
        textField4: this.properties.textField4,
        color4 : this.properties.color4,
        windowTitle4: this.properties.windowTitle4,
        windowDescription4: this.properties.windowDescription4,
        windowLink4: this.properties.windowLink4,
        colorText4: this.properties.colorText4,
        //element 5
        textField5: this.properties.textField5,
        color5: this.properties.color5,
        windowTitle5: this.properties.windowTitle5,
        windowDescription5: this.properties.windowDescription5,
        windowLink5: this.properties.windowLink5,
        colorText5: this.properties.colorText5,
        //element 6
        textField6: this.properties.textField6,
        color6 : this.properties.color6,
        windowTitle6: this.properties.windowTitle6,
        windowDescription6: this.properties.windowDescription6,
        windowLink6: this.properties.windowLink6,
        colorText6: this.properties.colorText6,
        //element 7
        textField7: this.properties.textField7,
        color7: this.properties.color7,
        windowTitle7: this.properties.windowTitle7,
        windowDescription7: this.properties.windowDescription7,
        windowLink7: this.properties.windowLink7,
        colorText7: this.properties.colorText7,
        //element 8
        textField8: this.properties.textField8,
        color8: this.properties.color8,
        windowTitle8: this.properties.windowTitle8,
        windowDescription8: this.properties.windowDescription8,
        windowLink8: this.properties.windowLink8,
        colorText8: this.properties.colorText8,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  public numberCharacter(value: string){
    if( value.length >50){
      return (strings.LengthErrorLabel);
    } else return "";
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
               groupName: strings.TitleLabel,
               groupFields: [
                 PropertyPaneTextField('description', {
                   label: strings.TitleLabel,
                 }), ]
             },
           {
              groupName: strings.ElementGroup1Label,
              groupFields: [
                PropertyPaneTextField('textField1', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText1', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText1,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color1', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color1,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle1', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription1', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink1', {
                  label: strings.PopUpLink,
                }),
              ]
            },{
              groupName: strings.ElementGroup2Label,
              groupFields: [
                PropertyPaneTextField('textField2', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText2', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText2,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color2', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color2,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle2', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription2', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink2', {
                  label: strings.PopUpLink,
                }),

              ]
            },
            {
              groupName: strings.ElementGroup3Label,
              groupFields: [
                PropertyPaneTextField('textField3', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText3', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText3,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color3', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color3,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle3', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription3', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink3', {
                  label: strings.PopUpLink,
                }),

              ]
            },{
              groupName: strings.ElementGroup4Label,
              groupFields: [
                PropertyPaneTextField('textField4', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText4', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText4,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color4', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color4,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle4', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription4', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink4', {
                  label: strings.PopUpLink,
                }),

              ]
            }, {
              groupName: strings.ElementGroup5Label,
              groupFields: [
                PropertyPaneTextField('textField5', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText5', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText5,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color5', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color5,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle5', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription5', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink5', {
                  label: strings.PopUpLink,
                }),

              ]
            },{
              groupName: strings.ElementGroup6Label,
              groupFields: [
                PropertyPaneTextField('textField6', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText6', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText6,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color6', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color6,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyPaneTextField('windowTitle6', {
                  label: strings.PopUpTitleLabel,
                }),
                PropertyPaneTextField('windowDescription6', {
                  label: strings.PopUpTextLabel,
                }),
                PropertyPaneTextField('windowLink6', {
                  label: strings.PopUpLink,
                }),

              ]
            },{
              groupName: strings.ElementGroup7Label,
              groupFields: [
                PropertyPaneTextField('textField7', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText7', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText7,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color7', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color7,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),  PropertyPaneTextField('windowTitle7', {
                    label: strings.PopUpTitleLabel,
                  }),
                  PropertyPaneTextField('windowDescription7', {
                    label: strings.PopUpTextLabel,
                  }),
                  PropertyPaneTextField('windowLink7', {
                    label: strings.PopUpLink,
                  }),

              ]
            }, {
              groupName: strings.ElementGroup8Label,
              groupFields: [
                PropertyPaneTextField('textField8', {
                  label: strings.TextLabel,
                  onGetErrorMessage: this.numberCharacter.bind(this),
                }),
                PropertyFieldColorPickerMini('colorText8', {
                  label: strings.TextColorLabel,
                  initialColor: this.properties.colorText8,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),
                PropertyFieldColorPickerMini('color8', {
                  label: strings.BackColorLabel,
                  initialColor: this.properties.color8,
                  disabled: false,
                  onPropertyChange: this.onPropertyPaneFieldChanged.bind(this),
                  render: this.render.bind(this),
                  disableReactivePropertyChanges: this.disableReactivePropertyChanges,
                  properties: this.properties,
                  onGetErrorMessage: null,
                  deferredValidationTime: 0,
                  key: 'colorMiniFieldId',
                }),  PropertyPaneTextField('windowTitle8', {
                    label: strings.PopUpTitleLabel,
                  }),
                  PropertyPaneTextField('windowDescription8', {
                    label: strings.PopUpTextLabel,
                  }),
                  PropertyPaneTextField('windowLink8', {
                    label: strings.PopUpLink,
                  }),

              ]
            }
          ],
        }
      ]
    };
  }
}
