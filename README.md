# Learning Platform

## Overview

This is a learning platform that allows users to manage sessions and lesson materials. It's built according to the Atomic Design principles and uses Styled Components for styling.

<img width="1440" alt="Eduqat" src="https://github.com/iqbalsetiawan/eduqat_assesment/assets/52906490/cbdb0e08-c20d-4b72-a5cb-b1aa41016f97">

## Features

1. **Add Session**: Users can add new learning sessions.

2. **Edit Session Name**: Users can edit the name of a session.

3. **Drag and Drop Sessions**: Sessions can be rearranged via drag and drop, allowing users to change their order.

4. **Add Lesson Material**: Users can add lesson materials to each session.

5. **Delete Sessions and Lesson Materials**: Users can delete both sessions and individual lesson materials.

6. **Data Persistence**: Session and lesson material data is stored in localStorage, allowing users to resume their work even after closing the browser.

   > **Note**: If you need to reset the data, you can do so through the developer tools on the "Application" tab. Clear the localStorage to start fresh.

## Design System - Atomic Design

This project follows the principles of Atomic Design. Atomic Design breaks down components into smaller, reusable building blocks, which are then combined to create more complex components. The design system is organized into atoms, molecules, organisms, templates, and pages.

For more information on Atomic Design, refer to [Atomic Design by Brad Frost](https://atomicdesign.bradfrost.com/table-of-contents/).

## Styling - Styled Components

Styled Components is used for styling in this project. Styled Components allows for the creation of dynamic styles using JavaScript and ensures component-level styling isolation.

For more information on Styled Components, refer to [Styled Components Documentation](https://styled-components.com/).

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository from GitHub:
   ```
   git clone git@github.com:iqbalsetiawan/eduqat_assesment.git
   ```

2. Navigate to the project folder:
   ```
   cd eduqat_assesment
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the development server:
   ```
   npm start
   ```

5. Open your browser and visit [http://localhost:3000](http://localhost:3000) to view the application.

## Usage

1. **Adding a Session**: Click the "Add Session" button and enter the session details.

2. **Editing Session Name**: Click the edit icon next to the session name to make changes.

3. **Reordering Sessions**: Drag and drop sessions to change their order.

4. **Adding Lesson Material**: Inside each session, click the "Add Lesson Material" button and provide the lesson material details.

5. **Deleting Sessions and Lesson Materials**: Click the delete icon next to a session or lesson material to remove it.

## Deployment

This project has been deployed to Netlify at https://eduqat.netlify.app/ for public access.
