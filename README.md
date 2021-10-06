# ⚛️ Learning React.js!
This repo is made for learning **React.js** with small individual projects. I learnt about JSX, React components, props, functional components, conditional rendering, operators & hooks! This is a single page application. <br>
Deployed on GitHub Pages with `gh-pages` - https://guptasajal411.github.io/introduction-to-react-components

## 🧐 Web app breakdown
| **Component/Part**  | **Description** |
| ------------- | ------------- |
| ![image](https://user-images.githubusercontent.com/70312106/136220959-a7429bce-2677-49a8-9a93-2432a2ee8d24.png)  | Used `Avatar` component to render profile picture |
| ![image](https://user-images.githubusercontent.com/70312106/136221382-cdf400a5-df1c-449e-90f1-43270bae140a.png) | Used the `Date()` function of JavaScript to render custom messages for morning, afternoon, evening & night. The `Time` component returns the welcome message with interpolation |
| ![image](https://user-images.githubusercontent.com/70312106/136221964-2184ad53-5716-42c1-bef2-a57c45d1f397.png) | Used the `map` method in JavaScript to render new card for each contact in `contacts.js`, this uses the `createCard` function in `Card` component & passes the data with React props. `Card` also uses `Avatar` component to render images of each contact |
| ![image](https://user-images.githubusercontent.com/70312106/136222931-f04b2a9a-41d3-4ad1-ad92-cd97184f92e1.png) | Similar to contact section, but mapping of `Emojipedia` array is done inside `Emojipedia` component unlike contact section |
|  |  |
|  |  |
|  |  |
|  |  |

## 📸 Screenshot
![image](https://user-images.githubusercontent.com/70312106/136220815-b04f1a3a-c23e-4f04-a666-d79d43e3b30f.png)


## 🤔 How to run a React app?
This app is deployed on GitHub Pages, so you can directly access it here - https://guptasajal411.github.io/introduction-to-react-components <br>
If you want to run this on your local system for development purposes, follow these steps - 
- Clone this repository on your local system <br>
  `git clone https://github.com/guptasajal411/introduction-to-react-components.git`
- Navigate to the project directory <br>
  `cd ./introduction-to-react-components/`
- Run the React app <br>
  `npm start`
- Go to `localhost:3000` on your browser. Voila! The app is up & running
