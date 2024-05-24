import { Link, Head } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Welcome" />
            <div className="relative sm:flex sm:justify-center sm:items-center min-h-screen bg-dots-darker bg-center bg-gray-100 dark:bg-dots-lighter dark:bg-gray-900 selection:bg-red-500 selection:text-white">
                <div className="sm:fixed sm:top-0 sm:right-0 p-6 text-end">
                    {auth.user ? (
                        <Link
                            href={route('dashboard')}
                            className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                        >
                            Dashboard
                        </Link>
                    ) : (
                        <>
                            <Link
                                href={route('login')}
                                className="font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Log in
                            </Link>

                            <Link
                                href={route('register')}
                                className="ms-4 font-semibold text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white focus:outline focus:outline-2 focus:rounded-sm focus:outline-red-500"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                <div className="max-w-7xl mx-auto p-6 lg:p-8">
                    <div className="flex justify-center">
                        <svg width="282" height="277" viewBox="0 0 282 277" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="69.25" y="69.25" width="138.5" height="138.5" rx="69.25" fill="white" stroke="white" stroke-width="138.5" />
                            <rect x="89.9659" y="88.9867" width="98" height="98" rx="49" fill="white" stroke="black" stroke-width="98" />
                            <circle cx="139.5" cy="138.5" r="63.5" fill="white" />
                            <path d="M123.858 140.849L240.594 52.8003L242.08 226.892L123.858 140.849Z" fill="white" />
                            <path d="M162.88 110.453L159.427 113.876L157.436 113.222C154.791 112.32 151.836 112.476 149.191 113.658C147.667 114.342 146.484 115.338 142.751 119.071L138.178 123.644L146.049 131.516L153.92 139.356L158.462 134.751C163.751 129.462 164.622 128 164.871 124.298C164.964 122.587 164.84 121.653 164.311 120.098L163.658 118.107L167.08 114.653L170.533 111.2L168.418 109.084L166.333 107L162.88 110.453ZM156.564 119.196C158.929 120.502 159.862 124.08 158.462 126.351C158.089 126.911 156.938 128.249 155.849 129.307L153.889 131.267L150.062 127.44L146.236 123.613L148.724 121.218C150.124 119.88 151.587 118.76 152.084 118.636C152.551 118.542 153.111 118.418 153.267 118.356C153.827 118.169 155.413 118.573 156.564 119.196Z" fill="black" />
                            <path d="M130.96 136.773L127.6 140.133L126.107 138.64L124.644 137.178L120.071 141.782C116.4 145.422 115.311 146.729 114.658 148.191C113.476 150.804 113.32 153.791 114.222 156.436L114.876 158.427L111.453 161.88L108 165.333L110.084 167.449L112.2 169.533L115.653 166.08L119.107 162.658L121.098 163.311C122.653 163.84 123.587 163.964 125.422 163.871C129.031 163.653 130.369 162.844 135.751 157.462L140.356 152.889L138.893 151.427L137.431 149.933L140.76 146.573L144.089 143.244L142.067 141.222L140.044 139.2L136.684 142.56L133.356 145.889L132.484 145.049L131.644 144.178L134.973 140.849L138.333 137.489L136.311 135.467L134.289 133.444L130.96 136.773ZM130.307 154.849C127.756 157.431 126.667 158.084 124.862 158.116C121.16 158.147 118.578 154.942 119.511 151.458C119.791 150.462 120.476 149.498 122.249 147.693L124.613 145.236L128.44 149.062L132.267 152.889L130.307 154.849Z" fill="black" />
                        </svg>
                    </div>
                    <div className="flex justify-center mt-16 px-6 sm:items-center sm:justify-between">
                        <div className="text-center text-sm sm:text-start">&nbsp;</div>

                        <div className="text-center text-sm text-gray-500 dark:text-gray-400 sm:text-end sm:ms-0">
                            Laravel v{laravelVersion} (PHP v{phpVersion})
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .bg-dots-darker {
                    background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(0,0,0,0.07)'/%3E%3C/svg%3E");
                }
                @media (prefers-color-scheme: dark) {
                    .dark\\:bg-dots-lighter {
                        background-image: url("data:image/svg+xml,%3Csvg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.22676 0C1.91374 0 2.45351 0.539773 2.45351 1.22676C2.45351 1.91374 1.91374 2.45351 1.22676 2.45351C0.539773 2.45351 0 1.91374 0 1.22676C0 0.539773 0.539773 0 1.22676 0Z' fill='rgba(255,255,255,0.07)'/%3E%3C/svg%3E");
                    }
                }
            `}</style>
        </>
    );
}
