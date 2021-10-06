# ⚛️ Learning React.js!
This repo is made for learning **React.js** with small individual projects. I learnt about JSX, React components, props, functional components, conditional rendering, operators & hooks! This is a single page application. <br>
Deployed on GitHub Pages with `gh-pages` - https://guptasajal411.github.io/introduction-to-react-components

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

## 🧐 Web app breakdown
| **Component/Part**  | **Description** |
| ------------- | ------------- |
| ![image](https://user-images.githubusercontent.com/70312106/136220959-a7429bce-2677-49a8-9a93-2432a2ee8d24.png) | Used `Avatar` component to render profile picture |
| ![image](https://user-images.githubusercontent.com/70312106/136221382-cdf400a5-df1c-449e-90f1-43270bae140a.png) | Used the `Date()` function of JavaScript to render custom messages for morning, afternoon, evening & night. The `Time` component returns the welcome message with interpolation |
| ![image](https://user-images.githubusercontent.com/70312106/136221964-2184ad53-5716-42c1-bef2-a57c45d1f397.png) | Used the `map` method in JavaScript to render new card for each contact in `contacts.js`, this uses the `createCard` function in `Card` component & passes the data with React props. `Card` also uses `Avatar` component to render images of each contact |
| ![image](https://user-images.githubusercontent.com/70312106/136222931-f04b2a9a-41d3-4ad1-ad92-cd97184f92e1.png) | Similar to contact section, but mapping of `Emojipedia` array is done inside `Emojipedia` component unlike contact section |
| ![image](https://user-images.githubusercontent.com/70312106/136224858-4d347fd7-e9cb-40b2-9492-077a29b17b66.png) | Used the ternary operator inside `App.jsx` to render either `Login` or `Register` based on the `isRegistered` boolean |
| ![image](https://user-images.githubusercontent.com/70312106/136225408-c7be1721-2c63-4e20-b810-6c68bc63277e.png) | The `Counter` component uses the `useState` hook which has an `increase` & `decrease` function to manipulate the content of the component |
| ![image](https://user-images.githubusercontent.com/70312106/136226042-ee8db848-5b40-42ea-b2f0-4e53152a5d8b.png) | Uses the `useState` hook to render current time when the button is clicked |
| ![image](https://user-images.githubusercontent.com/70312106/136226912-342cde06-0636-48a6-8fd1-bab35cb0d5b3.png) | Inside the `AutoTimeHook` component, once the button is clicked, it triggers a `setInterval` function which calls `getAutoTime` function which updates the `state` by each second |

## 📸 Screenshot
![image](https://user-images.githubusercontent.com/70312106/136220815-b04f1a3a-c23e-4f04-a666-d79d43e3b30f.png)
