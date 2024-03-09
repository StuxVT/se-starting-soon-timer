# Simple Countdown for SE


https://github.com/StuxVT/se-starting-soon-timer/assets/100985218/7fdee5df-04b1-47c3-adf5-7f80deef9d7e


## Installation:
1. Install [Widget.io](https://chromewebstore.google.com/detail/widgetio/fcgbjpajcfjnjgfdeookpnoefgcliljj) extension for Chrome
2. Download latest [SimpleCountdown.zip](https://github.com/StuxVT/se-starting-soon-timer/releases/download/v1.0.4/SimpleCountdown.zip)
3. Go to your [StreamElements Overlays Dashbaord](https://streamelements.com/dashboard/overlays), click on the "New Overlay" button
4. Click on the Widget.io icon, import SimpleCountdown.zip, and click "Create Widget"
   
 ![image](https://github.com/StuxVT/se-starting-soon-timer/assets/100985218/aaf0691e-e799-4e0b-8c89-1dc3eb8521b4)




[//]: # (## Dev Environment)

[//]: # ()
[//]: # (### Installation)

[//]: # (Paste your custom data into proper files, please have in mind, that in HTML file you just have to fill the space between comments saying it. You can also provide your JWT Token within widget.html file &#40;Line:11&#41;. )

[//]: # ()
[//]: # (### Usage)

[//]: # (Edit your files with a IDE of your choice. Open widget.html in your browser and you can use commands provided below in console window:)

[//]: # (```js)

[//]: # (emulateInit&#40;&#41;;)

[//]: # (```)

[//]: # (You can use `setChannelName&#40;"YourChannelName"&#41;;` before init, if are planning to use your channel name in your widgets.)

[//]: # ()
[//]: # (#### Emulating events)

[//]: # (To emulate event, just type in console:)

[//]: # (```js)

[//]: # (emulateNew&#40;type, amount, isGift, count&#41;)

[//]: # (```)

[//]: # (Fields `amount`, `isGift`, `count` are not required &#40;default values for them are: `amount=random&#40;0,36&#41;`, `isGift=false`,`count=1`&#41;)

[//]: # (Examples:)

[//]: # (```js)

[//]: # (emulateNew&#40;"follower"&#41;;)

[//]: # (emulateNew&#40;"subscriber"&#41;;)

[//]: # (emulateNew&#40;"subscriber",2&#41;;)

[//]: # (emulateNew&#40;"subscriber","gift",3&#41;;)

[//]: # (emulateNew&#40;"host",100&#41;;)

[//]: # (emulateNew&#40;"raid",100&#41;;)

[//]: # (emulateNew&#40;"cheer",100&#41;;)

[//]: # (emulateNew&#40;"tip",20&#41;;)

[//]: # (```)

[//]: # ()
[//]: # (You can also use event emiter within StreamElements overlay editor to emit events over socket &#40;For that you need to provide JWT token earlier&#41; or use the very same event test way in this page. You can also change session data to invoke onSessionUpdate)

[//]: # ()
[//]: # (### Summary)

[//]: # (If your widget works as it should, you are ready to copy each part to StreamElements Custom Widget and it should work straight ahead.)

[//]: # ()
[//]: # (### Known issues)

[//]: # (- no chat messages events)

[//]: # (- no cleanup &#40;You need to F5 before reinit&#41;)

[//]: # (- custom fields are not supported for HTML/CSS &#40;besides their values IN JS - remember to prepend your actual JSON file with `let fieldData=`&#41;)
