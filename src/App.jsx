// src/App.jsx
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./layout/Rootlayout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SamsungRepair from "./pages/SamsungRepair";
import WatchRepair from "./pages/WatchRepair";
import MacRepair from "./pages/MacRepair";
import IpadRepair from "./pages/ipadRepair";
import IphoneRepair from "./pages/iphoneRepair";
import IpodRepair from "./pages/IpodRepair";
import RefurbishedIphone from "./pages/RefurbishedIphone";
import RefurbishedSamsung from "./pages/RefurbishedSamsung";
import OfferPricing from "./pages/Offer&pricing";
import Refund from "./pages/Refund";
import Term from "./pages/Term";
import Why from "./pages/Why";
import RepairDetail from "./pages/RepairDetail";
import ModelSelection from "./pages/ModelSelection";
import Checkout from "./pages/Checkout";



const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Layout wrapper
    children: [
      { path: "/", element: <Home /> },
     
      { path: "/refurbished iphone", element: <RefurbishedIphone /> },
      { path: "/refurbished-iphones", element: <RefurbishedIphone /> },
      { path: "/refurbished-samsung", element: <RefurbishedSamsung /> },
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/samsung repairs", element: <SamsungRepair /> },
      { path: "/watch repair", element: <WatchRepair /> },
      { path: "/mac repair", element: <MacRepair /> },
      { path: "/ipad repair", element: <IpadRepair /> },
      { path: "/iphone repair", element: <IphoneRepair /> },
      { path: "/ipod repair", element: <IpodRepair /> },
      { path: "/ipod-repairs", element: <IpodRepair /> },
      { path: "/offer-pricing", element: <OfferPricing /> },
      { path: "/offer pricing", element: <OfferPricing /> },
      { path: "/refund_returns_policy", element: <Refund /> },
      { path: "/refund-returns-policy", element: <Refund /> },
      { path: "/terms-and-conditions", element: <Term /> },
      { path: "/terms conditions", element: <Term /> },
      { path: "/why-refurbished", element: <Why /> },
      { path: "/detail", element: <RepairDetail /> },
      { path: "/model", element: <ModelSelection /> },
      { path: "/checkout", element: <Checkout /> },
      
      
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
