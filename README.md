## Deployed version
Deployed on Versel version you can find [here](iteam-task.vercel.app)

## App description

Welcome to our job search web application built with Next.js! Our application aims to simplify the job search process by providing users access to a comprehensive job database through the integration of the "JSearch" API, available at "https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch". This application consists of four main pages:

Home: This page serves as the landing page where users can initiate their job search. They can enter relevant search criteria to find available job listings.

Jobs: Similar to the Home page, users can search for jobs here. Additionally, if users are registered and logged in, they will receive personalized job recommendations based on their profile and search history.

Liked: In this section, users can view the job listings they have liked or bookmarked for future reference.

Profile: For registered users, the Profile page displays their personal information and preferences. If a user is not logged in, they will be prompted to register using the registration form available on this page.

Our application leverages Next.js to provide a fast and responsive user experience. The integration with the JSearch API ensures that users have access to up-to-date and relevant job listings. Whether you're actively seeking new opportunities or just exploring the job market, our application aims to streamline your job search process.

## App Structure

The project directory is organized into two main folders: public and src.

**src**:

- **api**: This directory contains the Axios instance configuration and key API settings. Here, you'll find a file responsible for setting up the Axios instance for making API requests and managing API configurations.

- **styles**: Within this folder, you'll find global styles for Tailwind CSS. These styles are applied throughout the application to maintain consistent styling across different components and pages.

- **interface**: This directory houses the main interfaces used throughout the application. These interfaces define the structure of data objects exchanged between different components and modules within the application.

- **modules**: Here, you'll find modules containing functions for various parts of the program. These modules encapsulate functionality related to specific features or tasks, such as managing liked job listings (like.ts), user profiles (profile.ts), and handling API requests (requests.ts).

- **components**: All reusable components used in the application are stored in this directory. These components are modular and can be easily integrated into different pages or sections of the application.

- **pages**: This directory contains all the pages that can be accessed within the application. Each page corresponds to a specific route and serves as a standalone unit of functionality. Pages are built using React components and may contain nested components, API calls, and state management logic.

**public**:

The public directory contains assets such as images, fonts, and other static files that are served directly to the client without processing by Webpack or Babel. These assets can be referenced and used within the application as needed.

## Technologies Used
- **Next.js 14** + **Typescript** -
- **Tailwind** **css**
- **Formik** + **Yup**
- **Axios** + **SWR hooks**

## Api
**index.ts**:
- This file exports an instance of the axios library. The instance is created with a base URL and set of headers.
  The headers and baseUrl presented by  environment variables.

This instance can be used to make HTTP requests to the API by calling methods. The instance can be imported into other files where it is needed to make API requests.
Using a single instance of axios with a preconfigured base URL and headers can help simplify code and reduce the risk of errors when making API requests.
It also allows for easier configuration and management of API authentication keys.

## Components
- **AppHeader**:
  Header component with a blue background color and displaying
  a list of links and a logout button. It uses and react-icons library,
  IuseRouter hook to handle navigation and the useState hook to manage state.

- **FormArea**:
  FormArea component is a reusable textarea component for accepting user input (Specially for Formik custom
  Field propertis) . The props object is spread onto the textarea element, forwarding all defined attributes and props to the underlying HTML textarea.

- **FormInput**:
  FormInput functional component accepts a name, type, labelText, placeholder, and optional className, touched, and error props. It also conditionally accepts a textArea prop. If textArea is truthy, it will render a <textarea> element using FormArea, or a regular <input> element otherwise. The Field component from formik is used to create a controlled input field. If touched and error are truthy, an error message will be displayed below the input field.

- **FunctionalRegInput** and **PersonalRegInput**:
  These components were created to separate the registration page. In general, these are just containers for three FormInput elements, one requests personal information, the other logins and passwords.

- **JobCard**:
  Functional component JobCard renders a job posting card with information such as employerName, jobIsRemote, jobTitle, jobCity, jobMinSalary, and jobMaxSalary. It also includes a a Next.js Link component to direct to job details page, and is styled with tailwind classes. It is used for displaying a list of job postings in a user-friendly format.

- **JobGrid**:
  This component takes in a jobs array and renders it in a tailwind-style grid, using the JobCard component. The JobsGrid component is responsive, and adjusts the number of columns based on the screen size.

- **Loader**:
  Loader component renders a full-screen overlay with a spinning circular loading animation. It's a useful tool to display when data is being loaded, keeping users informed and engaged during the loading process.
  It is used to display a list of job postings in a clean, organized manner, and ensures consistency in the display of job information.

## Interfaces
For better visual clarity, we give all interfaces names starting with “I”
- **IProfile** - represents data for new or existing users profile
- **IFormProps** - represents data that needed by FormInput
- **IGetResponse** - represents data in response for "get" request
- **IJobData** - represents data of sinlge job proposition
- **IRegistrationValues** - represents values that Formik uses for registration

## Moduls
They divided for three parts: like, profile, requests;
- **like.ts**: This module provides functions for managing liked jobs using browser local storage.

    - _toggleLikedJob_: adds or removes a job to or from the list of liked jobs, and saves the updated list to local storage.

    - _isJobInStorage_: returns true if a given job is in the list of liked jobs, or false otherwise.

    - _getLikedJobs_: returns the current list of liked jobs from local storage.

    - _deleteLikedJob_: removes a job from the list of liked jobs, and saves the updated list to local storage.
- **profile.ts**: This module is used to manage user authentication and validation of user input in a web application.

    -  _SignupSchema_  object utilizes the yup validation library to define a schema for a user signup form, ensuring that user input meets the required length and format.

    - _logOut_ function is a utility function that clears the local storage to ensure that the user logs out properly, removing any information that was saved during their session.

    - _registerUser_ - function that takes profile (IProfile interface) data and savet it to localStorage like JSON string.
- **requests.ts**:
  This module exports two functions listJobsFetcher and detailFetcher that perform HTTP requests to fetch job data.

  _listJobsFetcher_  - fetcher-function for SWR, and it`s accepts a searchTerm parameter as an argument and
  returns a Promise that resolves to an array of IJobData objects (basically it's list of job proposition) on a successful response.

  _detailFetcher_ - accepts an id parameter as an argument and returns a Promise that resolves to a single IJobData object (single job proposition) on a successful response.

  Two first functions make use of the api object to send HTTP requests to a server with the help of axios.
  The responses are then transformed to match the required data structure defined in the IJobData interface before being returned.

## Pages

There are several pages in this application:

- **Home** - Job search page. After the user enters a request in input. If the answer is positive, JobCards will be shown
  (inside the JobGrid component). With each new search, the cards will be updated. Axios and SWR are used for requests.

- **CreateProfile** - This component creates a new user account and stores user data in the local storage of the browser. After submission, the user is redirected to the /jobs page. Also if profile exists
  navigate him on '/profile' page.

- **JobPage ([jobId].tsx)** - This component displays the job details (IJobData), that it gets from api. Information like icon, sallary or city rendering conditionaly. This component uses the Image component from Next.js to display the job image. Also, there is a Loaded component, that renders, whene information from api loading.

- **Jobs** - It's page that shows a jobs proposition. If the user is registered, the page will display recommended vacancies to him
  if found (Depending on the description and desired position of his profile). There is also a job search line on the page, so in addition to recommendations, you can find a job manually. Loader component also include

- **Liked** - A page for displaying job cards that you liked. Using functions from the "liked" module, data is taken from localStorage and displayed on the page as JobCard components. There is also a delete button next to each card, that filters localStorage (remove job object with same id) .

- **Profile** - Page for profile data image. Personal data is displayed here (Name, desired position and else info about user). Using the "like" module, data is taken from localStorage. If it doesn’t find the information (there is no profile), it redirects to the "/create-profile page".
