# React, TypeScript, VisualStudio
Steps to create a Visual Studio Project with React Support

# Step 1
Create a ASP.NET Core Project in Visual Studio.

# Step 2
Create a Scripts folder in the root folder of the project
Create src folder under Scripts Folder

# Step 3
Copy package.json, tsconfig.json adn webpack.config.js from the repository to the root folder of the project
Open Command Prompt and Navigate to the location where package.json is present
On Windows type the below command:
```
npm install
```
On Mac type the below command:
```
sudo npm install
```

Now all the required dependencies have been installed by npm

# Step 4
Create a components folder under Scripts/src folder added earlier
Create a Hello.tsx file in Script/src/components folder with the below content:

```html
import * as React from "react";

export interface IHelloProps {
    text: string;
}

export class Hello extends React.Component<IHelloProps, {}> {
    render() {
        return <div>
            {this.props.text}
        </div>;
    }
}
```

Create an index.tsx file in Scripts/src folder with the below content:
```html
import * as React from "react";
import * as ReactDOM from "react-dom";
import { Hello } from './components/Hello';

ReactDOM.render(
    <div>
        <Hello text="Hello From React TypeScript..." />
    </div>,
    document.getElementById("app"));
```

# Step 5
In the command prompt execute:
```
npm webpack
```
This command creates a Scripts/dist folder under wwwroot directory and creates the bundle.js file inside this folder.

# Step 6
In the wwwroot folder create index.html with the below content:
```html
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <title>React Typescript</title>
    
</head>
<body>
    <div id="app"></div>

    <script src="Scripts/dist/bundle.js"></script>
</body>
</html>
```
This file references bundle..js which contains the React Code.

# Step 7 - Serving StaticFiles in ASP.NET Core
Modify BuildWebHost function Program.cs like below:
```c#

WebHost.CreateDefaultBuilder(args)
                .UseContentRoot(Directory.GetCurrentDirectory())
                .UseStartup<Startup>()
                .Build();
```
Add
```c#

app.UseStaticFiles(); 

```
line in Configure method of StartUp.cs

# Build and Run
Now run the ASP.NET Core Project using Ctrl+F5 or F5 and navigate to index.html to see React in action.

Happy Coding :)


