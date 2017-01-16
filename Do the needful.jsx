//The future of website creation at Citi lies in the hands of this script

// loop through all frames, if associateXMLElement.markupTag.name == "copy", create structure
/*
var myTextFrames = app.activeDocument.textFrames;
var myTextFramesNo = myTextFrames.length;

for (i = 0; i < myTextFramesNo; i++)
{
    
if (myTextFrames[i].properties.associatedXMLElement.markupTag.name == "copy")
{

*/
//First Level
var myTextFrames = app.activeDocument.textFrames;
var i = myTextFrames.length;

while (i--)
{

if (myTextFrames[i].properties.associatedXMLElement instanceof XMLElement
   && myTextFrames[i].associatedXMLElement.markupTag.name == "copy")
{
    
var myElements = app.activeDocument.xmlElements;
var newRecord = app.activeDocument.xmlElements.item(0).xmlElements.add("record", "Hi");

newRecord.xmlAttributes.add("name", "This is an XML attribute. It will not appear in the layout!")
newRecord.xmlAttributes.add("type", "content")

//Second Level
var itemL2 = app.activeDocument.xmlElements.item(0).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlAttributes.add("name", "COPY");

//Third Level
var value = myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("value");


// Final Level
myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "CONTENT_ID");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");


myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "BUSINESS_ID");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "LOCALE_ID");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "APP_ID");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "NAME");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "TEXT");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", myTextFrames[i].contents);

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "VARIABLE_COPY");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "START_DATE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "END_DATE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "START_DATE_NO_TIME");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "END_DATE_NO_TIME");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "ACTIVE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "T");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "SET_NOTIFICATION");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "N");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "NOTIFICATION_MESSAGE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "TEMPLATE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "PROPERTY");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "PERSONALIZATION_ATTRIBUTES");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "PROMO_CODE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "ELIGIBLE_DATA");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "GROUP_TYPE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "Container");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "SUBGROUP_TYPE");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "Container");

myElements.item(0).xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlElements.add("item");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("name", "CONFIG_DETAILS");
newRecord.xmlElements.item(-1).xmlElements.item(-1).xmlElements.item(-1).xmlAttributes.add("value", "");
myTextFrames[i].associatedXMLElement.untag();



} 
    
}
