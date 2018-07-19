# IISNode

Hosting node.js appplications in IIS on Windows using the IISNode and url-rewrite.
* **
## Setup

For setting up IISNode on windows machine follow these steps-
* **
### Installation

* Download and install node on your windows machine choose any x64 or x86 as per your system configuration.
* Enable IIS server on your windows machine, for details [click Here](https://helpdeskgeek.com/windows-10/install-and-setup-a-website-in-iis-on-windows-10/)

* Download and install IISNode like any other software.

* Download and install urlRewrite module in same manner.

After Completing these setups you are ready to deploy your app on iis server.

* **
### Deployment

* Copy your code in C:\ directory, if you use any other directory some time you may get some authentication error.

* Download sample [Web.Config](https://github.com/RohitChaturvedi05/Tutorials/blob/master/demo/03-Node/05-IISNode/web.config) and copy it in your root directory.

* Update your app startup filename in Web.Config.

* verify rewrite configuration details.

* Now goto iis server-
```
windows-key + r
inetmgr
```
* In iis server goto site folder and right click on it.

* select **Add Website**

* fill details enter **SiteName**, select **PhysicalPath**, enter **Port** and **HostName**.
    * **Note-** *do not use hardcode port number in your app, always  use **process.env.port**.*

* click on **OK** to save your details.
* click on your newly created website, then on right pane click on **restart**. 
* add your website url in **host** file.
```
windows-key + r
%SystemRoot%\System32\drivers\etc\
```

Your App ready to use.

* **


### Reference
* [IISNode](https://github.com/tjanczuk/IISNode/) - IISNode GitHub
* [URL-Rewrite](https://www.iis.net/downloads/microsoft/url-rewrite) - URL Rewrite module
* [Node](https://nodejs.org/en/download/)- Node Download Page
* [Web.Config](https://gist.github.com/pbaio/f63918181d8d7f8ee1d2)- Detailed information about on IISNode web.config.
* [Blog on IISNode](https://tomasz.janczuk.org/2011/08/hosting-nodejs-applications-in-iis-on.html) - Detail discussion on IISNode.

* **