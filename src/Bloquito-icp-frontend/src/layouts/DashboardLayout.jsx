"use client"
import { Blocks, Brain, LibraryBig, LogOut, Menu, Newspaper, Settings, SquarePen, User, WandSparkles } from 'lucide-react'
import React, { Children, useContext, useEffect, useState } from 'react'
import { UserContext } from "../context/UserContext";
import { Outlet, Link, useLocation, Navigate } from "react-router-dom";

export default function DashboardLayout() {

    const location = useLocation();
    const pathname = location.pathname;
    const {user, ready} = useContext(UserContext);

    if (ready && !user) {
        return <Navigate to="/login" replace />; // Redireciona para a página de login
    }

    return (
        <div data-theme="winter" className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content justify-center">
                {/* Page content here */}
                
                <div className="navbar bg-base-100 border-b md:py-6 items-center my-auto">
                <div className="flex-1">
                    <label htmlFor="my-drawer-2" className="btn drawer-button lg:hidden">
                    <Menu />
                    </label>
                    <div className='items-center'>
                    <p className='text-lg md:text-xl text-gray-600 items-center mt-2 px-4 lg:px-0'>
                        {pathname === "/dashboard" && (
                        "Meus servers"
                        )}
                        {pathname === "/dashboard/botconfig" && (
                        "Configurar bot"
                        )}
                    </p>
                    </div>
                </div>
                
                <div className="flex-none space-x-2">
                    <p className='text-gray-700 text-md hidden md:block'>{user?.name}</p>
                    <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        {user?.image ? (
                            <div className="w-10 rounded-full">
                                <img
                                alt="User name"
                                src={user?.image} 
                                />
                            </div>
                        ) : (
                            <div className="mx-auto my-auto items-center">
                                <span className="loading loading-dots loading-lg"></span>
                            </div>
                        )}
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li>
                        <a className="justify-between" href="/dashboard">
                            Meus servers
                            <span className="badge">New</span>
                        </a>
                        </li>
                        <li><a href='/dashboard/botconfig'>Configurar bot</a></li>
                        <li><a>Sair</a></li>
                    </ul>
                    </div>
                </div>
                </div>

                <div className='mt-8 md:px-8'>
                  <Outlet />
                </div>
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                <ul className="menu bg-base-200 text-base-content min-h-full md:w-70 2xl:w-80 p-4">
                <div className="p-4 font-normal border-b mb-6 flex gap-4 items-center">
                  <Blocks size={48} />
                  <h1 className="font-semibold text-xl">NFT Access</h1>
                </div>
                {/* Sidebar content here */}
                <li className={pathname === "/" ? 'font-medium text-lg bg-gray-300 rounded-lg' : 'font-medium text-lg'}><a href="/"><Newspaper />Home</a></li>
                <li className={pathname === "/dashboard" ? 'font-medium text-lg bg-gray-300 rounded-lg' : 'font-medium text-lg'}><a href='/dashboard'><WandSparkles />Meus servers</a></li>
                <li className={pathname.includes("/dashboard/configbot") ? 'font-medium text-lg bg-gray-300 rounded-lg' : 'font-medium text-lg'}><a href='/dashboard/configbot'><LibraryBig />Configurar bot</a></li>
                <li className={pathname === "" ? 'font-medium text-lg bg-gray-300 rounded-lg' : 'font-medium text-lg'}><a><LogOut />Sair</a></li>
                </ul>
            </div>
        </div>
    )
}