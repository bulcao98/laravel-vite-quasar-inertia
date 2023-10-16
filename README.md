# Laravel + Vite + Quasar + Inertia Boilerplate

A powerful boilerplate for modern web application development, combining the strengths of Laravel, Vite, Quasar, and Inertia.js.

## Features

-   **Laravel Backend**: Leverage Laravel's robust backend capabilities for secure user authentication, efficient routing, and database management.

-   **Vite for Swift Development**: Vite provides lightning-fast frontend build times, optimizing development and build processes for efficient iteration and testing.

-   **Quasar Framework**: Utilize Quasar's comprehensive UI library, offering a wide range of pre-built components and themes for rapid, responsive UI development.

-   **Inertia.js**: Seamlessly integrate server-side logic with client-side routing for dynamic and interactive user interfaces.

## Getting Started

1. Clone the repository:

    ```bash
    git clone https://github.com/bulcao98/laravel-vite-quasar-inertia.git
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Start the development server, open two terminals:

    ```bash
    npm run dev
    ```
    ```bash
    php artisan serve
    ```

    Begin building your Laravel application with the powerful combination of Vite, Quasar, and Inertia.js.


##Usage

Authentication: Pre-configured authentication system for easy user management.

Customization: Easily customize and extend the boilerplate to suit the specific requirements of your project.

##Production
To prepare your application for production deployment, you'll need to build the assets. Run the following command:

```bash
npm run build
```
This command will trigger the build process, which compiles and optimizes your assets for production use. The resulting files will be generated in the public/build directory. These optimized files are ready to be served to your users for a faster and more efficient experience.

Remember to configure your web server to serve the files from the public directory, ensuring that it can access the build subdirectory for efficient asset delivery.

For more information on deploying Laravel applications, refer to the official Laravel deployment documentation. If you encounter any issues during the deployment process, consult the documentation for the specific technologies used in this boilerplate, including Vite, Quasar Framework, and Inertia.js.

##Documentation

For detailed information on each technology used in this boilerplate, refer to their respective documentation:

- [Laravel Documentation](https://laravel.com/docs)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Quasar Framework Documentation](https://quasar.dev/start/pick-quasar-flavour)
- [Inertia.js Documentation](https://inertiajs.com/)

##License

This project is licensed under the MIT License.
Acknowledgements

    Special thanks to the open-source communities behind Laravel, Vite, Quasar, and Inertia.js for their contributions to modern web development.
