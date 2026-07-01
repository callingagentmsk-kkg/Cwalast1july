/* ==========================================================================
   CWA SCIENCE CLASSES — Batch / Chapter Data
   Video links use YouTube embeds (placeholder public demo IDs).
   PDF links point to locally generated sample notes.
   ========================================================================== */

// Sample public YouTube video IDs used as placeholders for lecture demos
const DEMO_VIDEOS = [
  "dQw4w9WgXcQ", "M7lc1UVf-VE", "aqz-KE-bpKQ", "9bZkp7q19f0", "5qap5aO4i9A"
];

const BATCH_DATA = {
  c9: [
    { subject:"physics", title:"Motion — Speed, Velocity & Equations", desc:"Distance, displacement, velocity, acceleration और motion के equations।", duration:"48 min", lessons:"6 Lectures", video: DEMO_VIDEOS[0], pdf:"assets/pdf/class9_physics_motion.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"physics", title:"Force and Laws of Motion", desc:"Newton's Laws of Motion और उनके Applications।", duration:"52 min", lessons:"5 Lectures", video: DEMO_VIDEOS[1], pdf:"assets/pdf/class9_physics_motion.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"chemistry", title:"Matter in Our Surroundings", desc:"Solid, Liquid, Gas और उनके Physical Properties।", duration:"40 min", lessons:"4 Lectures", video: DEMO_VIDEOS[2], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"chemistry", title:"Atoms and Molecules", desc:"Atomic Mass, Molecular Mass और Mole Concept की Basics।", duration:"55 min", lessons:"7 Lectures", video: DEMO_VIDEOS[3], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"maths", title:"Number Systems", desc:"Rational, Irrational Numbers और Real Number Line।", duration:"45 min", lessons:"5 Lectures", video: DEMO_VIDEOS[4], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"maths", title:"Polynomials", desc:"Polynomial की Degree, Zeroes और Factor Theorem।", duration:"50 min", lessons:"6 Lectures", video: DEMO_VIDEOS[0], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
  ],
  c10: [
    { subject:"physics", title:"Light — Reflection and Refraction", desc:"Mirror, Lens Formula और Ray Diagrams की पूरी जानकारी।", duration:"58 min", lessons:"8 Lectures", video: DEMO_VIDEOS[1], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"physics", title:"Electricity", desc:"Ohm's Law, Resistance, Series-Parallel Circuits।", duration:"60 min", lessons:"7 Lectures", video: DEMO_VIDEOS[2], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"chemistry", title:"Chemical Reactions and Equations", desc:"Balancing Equations और Reactions के Types।", duration:"46 min", lessons:"6 Lectures", video: DEMO_VIDEOS[3], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"chemistry", title:"Acids, Bases and Salts", desc:"pH Scale, Indicators और रोजमर्रा के उदाहरण।", duration:"42 min", lessons:"5 Lectures", video: DEMO_VIDEOS[4], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"maths", title:"Quadratic Equations", desc:"Factorization, Formula Method और Nature of Roots।", duration:"50 min", lessons:"6 Lectures", video: DEMO_VIDEOS[0], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"maths", title:"Trigonometry Basics", desc:"Trigonometric Ratios, Identities और Applications।", duration:"55 min", lessons:"7 Lectures", video: DEMO_VIDEOS[1], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
  ],
  c11: [
    { subject:"physics", title:"Laws of Motion", desc:"Newton's Laws, Friction और Circular Motion Dynamics।", duration:"62 min", lessons:"8 Lectures", video: DEMO_VIDEOS[2], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"physics", title:"Work, Energy and Power", desc:"Work-Energy Theorem, Conservation of Energy।", duration:"57 min", lessons:"6 Lectures", video: DEMO_VIDEOS[3], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"chemistry", title:"Structure of Atom", desc:"Bohr Model, Quantum Numbers और Electronic Configuration।", duration:"53 min", lessons:"7 Lectures", video: DEMO_VIDEOS[4], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"chemistry", title:"Chemical Bonding", desc:"Ionic, Covalent Bond और VSEPR Theory।", duration:"58 min", lessons:"7 Lectures", video: DEMO_VIDEOS[0], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"maths", title:"Trigonometric Functions", desc:"Trigonometric Identities, Equations और Graphs।", duration:"60 min", lessons:"8 Lectures", video: DEMO_VIDEOS[1], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"maths", title:"Sequences and Series", desc:"AP, GP और उनके Sum Formulas।", duration:"48 min", lessons:"5 Lectures", video: DEMO_VIDEOS[2], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
  ],
  c12: [
    { subject:"physics", title:"Electric Charges and Fields", desc:"Coulomb's Law, Electric Field और Gauss's Law।", duration:"65 min", lessons:"9 Lectures", video: DEMO_VIDEOS[3], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"physics", title:"Current Electricity", desc:"Ohm's Law, Kirchhoff's Laws और Circuit Analysis।", duration:"60 min", lessons:"8 Lectures", video: DEMO_VIDEOS[4], pdf:"assets/pdf/class12_physics_electrostatics.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"chemistry", title:"Solutions", desc:"Concentration, Colligative Properties और Raoult's Law।", duration:"55 min", lessons:"6 Lectures", video: DEMO_VIDEOS[0], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"chemistry", title:"Electrochemistry", desc:"Electrochemical Cells, Nernst Equation और Conductance।", duration:"58 min", lessons:"7 Lectures", video: DEMO_VIDEOS[1], pdf:"assets/pdf/class10_chemistry_reactions.pdf", img:"assets/img/chem_tubes.jpg" },
    { subject:"maths", title:"Relations and Functions", desc:"Types of Relations, Functions और Composition।", duration:"50 min", lessons:"6 Lectures", video: DEMO_VIDEOS[2], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
    { subject:"maths", title:"Continuity and Differentiability", desc:"Limits, Continuity और Derivative Rules।", duration:"63 min", lessons:"8 Lectures", video: DEMO_VIDEOS[3], pdf:"assets/pdf/class11_maths_trigonometry.pdf", img:"assets/img/blackboard_formula.jpg" },
  ]
};

// Weekly test demo result data (keyed by class); mobile number not validated against real DB —
// this is a front-end demo that generates a consistent, believable result for ANY 10-digit number.
const RESULT_META = {
  9:  { testName:"Weekly Test - Week 8 (Class 9th)",  subjects:["Physics","Chemistry","Maths"] },
  10: { testName:"Weekly Test - Week 8 (Class 10th)", subjects:["Physics","Chemistry","Maths"] },
  11: { testName:"Weekly Test - Week 8 (Class 11th)", subjects:["Physics","Chemistry","Maths"] },
  12: { testName:"Weekly Test - Week 8 (Class 12th)", subjects:["Physics","Chemistry","Maths"] },
};
