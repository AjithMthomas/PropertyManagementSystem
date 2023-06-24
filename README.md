Property Management System Documentation
Project Overview
The Property Management System is a web application designed for property booking. It provides a user-friendly interface for users to browse and book properties, as well as an admin panel for administrative tasks such as property management and booking monitoring.

Key Features:

User Registration and Authentication: Users can create accounts and log in to the system to access personalized features.
Property Listing: Users can view a list of available properties with details such as location, amenities, and pricing.
Property Booking: Users can select a property, specify booking details, and make reservations.
Admin Panel: Administrators have access to an admin dashboard for managing properties, including create, edit, and update operations. They can also view and manage property bookings.
Technologies Used

Frontend:
---------
React
Tailwind CSS
react-hook-form
Yup
Material Tailwind
Razorpay

Backend:
---------
Python
Django
Django Rest Framework
Simple JWT
CORS (django-cors-headers)
Project Structure
The project follows a separate frontend and backend structure:

Frontend:
---------

src/: Main source code directory
src/components/: Contains reusable React components
src/pages/: Contains individual page components
src/config.js/: baseurl

Backend:
----------

manage.py: Django project management file

#account
pms/account: user and admin related query 
pms/account/views.py: Contains API views for authentication , login reqister
pms/account/models.py: account related models
pms/account/serializers.py: Defines serializers for converting model objects to JSON and vice versa of accounts data
pms/account/urls.py: Contains account URL patterns for API endpoints

#property
pms/property: property and reservation related query 
pms/property/views.py: Contains API views for property , login reservation
pms/property/models.py: property and reservation related models
pms/property/serializers.py: Defines serializers for converting model objects to JSON and vice versa of accounts data
pms/property/urls.py: Contains property URL patterns for API endpoints

Frontend Functionalities
----------------------------
User Authentication:

Users can register accounts by providing necessary details.
Registered users can log in using their credentials.
Authenticated users can access personalized features.

Property Listing:

Users can view a list of available properties.
Property details include location, amenities, pricing, and availability.
Property Booking:

Authenticated users can select a property, specify booking details, and make reservations.
Users are presented with payment options, including integration with Razorpay.

Admin Dashboard Functionalities
---------------------------------
Property Management:

Admins have access to an admin dashboard for managing properties.
They can view a list of existing properties, create new properties, edit property details, and delete properties.

Booking Monitoring:
Admins can view a list of property bookings

Backend Functionalities
-------------------------
The backend is built using Django and Django Rest Framework, providing the following functionalities:

Authentication:

User registration and login API endpoints are implemented.
Simple JWT is used for token-based authentication.
Property Management API:

API endpoints for CRUD operations on properties are available.
Admins can create, retrieve, update, and delete properties.



Setup Instructions
To set up the Property Management System project locally, follow these steps:

Clone the project repository from GitHub.
Set up the frontend:
Navigate to the frontend directory: cd frontend.
Install frontend dependencies: npm install.
Start the development server: npm start.
Set up the backend:
Navigate to the backend directory: cd backend.
Create a virtual environment: virtualenv env.
Activate the virtual environment
Install backend dependencies: pip install -r requirements.txt.
Run database migrations: python manage.py migrate.
Start the Django development server: python manage.py runserver.
----------------------------------------------------------
http://localhost:3000/login [for login to visi the website]
-------------------------------------------------------------------------------------------------------------------------------------
The project should now be accessible at http://localhost:3000,http://localhost:3001 (frontend) and http://localhost:8000 (backend).
---------------------------------------------------------------------------------------------------------------------------------------
