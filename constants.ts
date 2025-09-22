
import React from 'react';
import type { Publication, Achievement, Specialization } from './types';
import { BrainIcon, HeartPulseIcon, StethoscopeIcon, MicroscopeIcon, DnaIcon, GraduationCapIcon } from './components/Icons';


export const specializations: Specialization[] = [
  {
    title: 'Multitrauma & Neurotrauma',
    description: 'Expert management of complex head injuries and trauma affecting the nervous system, with a focus on optimal patient outcomes.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(HeartPulseIcon, null),
  },
  {
    title: 'Spine Surgeries',
    description: 'Advanced surgical procedures for a wide range of spinal conditions, including degenerative diseases, trauma, and tumors.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(DnaIcon, null),
  },
  {
    title: 'Vascular Neurosurgery',
    description: 'Specialized in treating blood vessel disorders of the brain and spinal cord, such as aneurysms and arteriovenous malformations.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(BrainIcon, null),
  },
  {
    title: 'DSA and Coiling',
    description: 'Hands-on experience with Digital Subtraction Angiography (DSA) and endovascular coiling for minimally invasive treatment of cerebral aneurysms.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(StethoscopeIcon, null),
  },
  {
    title: 'Pediatric Head Injury',
    description: 'Dedicated research and clinical focus on predicting functional outcomes and providing specialized care for head injuries in children.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(GraduationCapIcon, null),
  },
  {
    title: 'Cerebral Perfusion CT',
    description: 'Utilizing cutting-edge Computed Tomography techniques to assess brain blood flow and predict functional outcomes in patients.',
    // FIX: Replaced JSX syntax with React.createElement to be valid in a .ts file.
    icon: React.createElement(MicroscopeIcon, null),
  },
];


export const publications: Publication[] = [
  {
    title: 'A clinical study on Computed Tomography cerebral perfusion to predict functional outcome in Paediatric Head Injury.',
    journal: 'WORLD NEUROSURGERY JOURNAL (Expected 2025)',
    details: 'This thesis explores the use of advanced imaging to improve prognostic accuracy in young patients with traumatic brain injuries.',
    type: 'Thesis',
  },
  {
    title: 'A study on incidence and management of post-operative complications of thyroid surgeries.',
    details: 'M.S. General Surgery thesis focusing on patient safety and outcomes following thyroid procedures.',
    type: 'Thesis',
  },
  {
    title: 'Surgical intervention in foreign body ingestion in children - A case report.',
    details: 'Published paper detailing a specific surgical case, contributing to pediatric surgical literature.',
    type: 'Paper',
  },
  {
    title: 'Computed Tomography cerebral perfusion to predict functional outcome in Paediatric Head Injury.',
    details: 'Poster presentation summarizing key findings from the Mch Neurosurgery thesis research.',
    type: 'Poster',
  },
];

export const achievements: Achievement[] = [
  { category: 'Award', title: 'NTR University Gold Medalist', description: 'Awarded for outstanding academic performance throughout the MBBS program.' },
  { category: 'Award', title: 'Gold Medal in General Surgery', description: 'Recognized for achieving the highest marks in the M.S. General Surgery examinations.' },
  { category: 'Award', title: 'Best Outgoing MBBS Student', description: 'Honored as the top graduating student of the MBBS batch.' },
  { category: 'Award', title: 'State Wide Quiz Winner', description: 'First place at the APASICON 2020 State Wide Surgical Quiz.' },
  { category: 'Rank', title: 'Mch Neurosurgery RANK 87', description: 'Secured a top national rank for super-specialty training in Neurosurgery.' },
  { category: 'Rank', title: 'NEET PG RANK 9500 (STATE PG 400)', description: 'Achieved a competitive rank for post-graduate medical studies.' },
  { category: 'Rank', title: 'MBBS RANK 1910', description: 'High-ranking admission to the Bachelor of Medicine, Bachelor of Surgery program.' },
];
