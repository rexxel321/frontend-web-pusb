import { Route, Routes } from "react-router-dom";
import React, { Suspense } from "react";
import Main from "./Main";
import Home from "./Home";
import './index.css';


const AboutUs = React.lazy(() => import("./app/pusb/pusb-about/pages/AboutPage"));
const Structure = React.lazy(() => import("./app/pusb/pusb-structure/page"));
const StructureVoxaris = React.lazy(() => import("./app/pusb/pusb-structure-voxaris/page"));
const Events = React.lazy(() => import("./app/pusb/pusb-event/page"));
const AllEvents = React.lazy(() => import("./app/pusb/pusb-event/all/page"));
const EventDetailPage =  React.lazy(() => import("./app/pusb/pusb-event/[id]/page"));
const CnC = React.lazy(() => import("./app/pusb/pusb-cnc/page"));
const AllCnC = React.lazy(() => import("./app/pusb/pusb-cnc/all/page"));
const CncDetailPage =  React.lazy(() => import("./app/pusb/pusb-cnc/[id]/page"));
const SOP = React.lazy(() => import("./app/pusb/pusb-sop/page"));
const SOPEnglish = React.lazy(() => import("./app/pusb/pusb-sop/[sop]/eng-page"));
const SOPIndonesia = React.lazy(() => import("./app/pusb/pusb-sop/[sop]/indo-page"));
const News = React.lazy(() => import("./app/pusb/pusb-news/page"));
const AllNews = React.lazy(() => import("./app/pusb/pusb-news/all/page"));
const NewsDetailPage = React.lazy(() => import("./app/pusb/pusb-news/[slug]/page"));
const ContactUs = React.lazy(() => import("./app/pusb/pusb-contact/page"));

function App() {
  return (
    <Main>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="pusb/pusb-about" element={<AboutUs />} />
          <Route path="pusb/pusb-structure" element={<Structure />} />
          <Route path="pusb/pusb-structure-voxaris" element={<StructureVoxaris />} />
          <Route path="pusb/pusb-event" element={<Events />} />
          <Route path="/pusb-event/all" element={<AllEvents />} />
          <Route path="/pusb-event/:id" element={<EventDetailPage />} /> 
          <Route path="pusb/pusb-cnc" element={<CnC />} />
          <Route path="/pusb-cnc/all" element={<AllCnC />} />
          <Route path="/pusb-cnc/:id" element={<CncDetailPage />} />
          <Route path="pusb/pusb-sop" element={<SOP />} />
          <Route path="/pusb-sop/english-version" element={<SOPEnglish />} />
          <Route path="/pusb-sop/indonesian-version" element={<SOPIndonesia />} />
          <Route path="pusb/pusb-news" element={<News />} />
          <Route path="/pusb-news/all" element={<AllNews />} />
          <Route path="/pusb-news/:id" element={<NewsDetailPage />} />
          <Route path="pusb/pusb-contact" element={<ContactUs />} />
        </Routes>
      </Suspense>
    </Main>
  );
}

export default App;
