"use client";
import React, { useState } from 'react';
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Strengths from "@/components/Strengths";
import CTA from "@/components/CTA";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Leaders from "@/components/Leaders";
import FacultyGallery from "@/components/FacultyGallery";
import Partners from "@/components/Partners";
import CampusGallery from "@/components/CampusGallery";
import ApplyModal from "@/components/ApplyModal";

export default function Home() {
  const [isApplyModalOpen, setIsApplyModalOpen] = useState(false);

  const openModal = () => setIsApplyModalOpen(true);
  const closeModal = () => setIsApplyModalOpen(false);
  return (
    <main className="bg-black overflow-hidden">
      <Navbar onApply={openModal} />
      <Hero onApply={openModal} />
      <About />
      <Programs />
      <Strengths />
      <CTA onApply={openModal}/>
      <Partners />
      <Testimonials />
      <Leaders />
      <CampusGallery />
      <FacultyGallery />
      <Footer onApply={openModal}/>
      <ApplyModal isOpen={isApplyModalOpen} onClose={closeModal} />
    </main>
  );
}