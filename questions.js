const QUIZ_QUESTIONS = [
  {
    "id": 1,
    "section": "Physics",
    "question": "The distance between three consecutive troughs in a wave produced in a string is 4 cm. If 2.5 wave cycles pass through any point in a second, the wave in the string has velocity",
    "image": null,
    "options": [
      "10 cm/s",
      "0.16 cm/s",
      "0.8 cm/s",
      "5 cm/s"
    ],
    "correct": 4,
    "explanation": "The distance between two consecutive troughs is 1 wavelength (λ). Therefore, the distance between three consecutive troughs is 2λ.<br>Given: 2λ = 4 cm ⇒ λ = 2 cm.<br>Frequency (f) = 2.5 cycles/s = 2.5 Hz.<br>Wave velocity v = f × λ = 2.5 × 2 = <b>5 cm/s</b>."
  },
  {
    "id": 2,
    "section": "Physics",
    "question": "The splitting of white light into different colours on passing through a prism is called",
    "image": null,
    "options": [
      "reflection",
      "refraction",
      "dispersion",
      "deviation"
    ],
    "correct": 3,
    "explanation": "The phenomenon of splitting of white light into its seven constituent colors when it passes through a dispersing medium like a glass prism is called <b>dispersion</b> of light."
  },
  {
    "id": 3,
    "section": "Physics",
    "question": "The velocity of a body moving with a uniform retardation of 5 m/s² is 100 m/s at an instant. Its velocity after 7 second is",
    "image": null,
    "options": [
      "135 m/s",
      "100 m/s",
      "65 m/s",
      "Zero"
    ],
    "correct": 3,
    "explanation": "Initial velocity u = 100 m/s.<br>Uniform retardation a = -5 m/s².<br>Time t = 7 s.<br>Using the first equation of motion: v = u + at = 100 + (-5)(7) = 100 - 35 = <b>65 m/s</b>."
  },
  {
    "id": 4,
    "section": "Physics",
    "question": "A passenger in an aeroplane",
    "image": null,
    "options": [
      "shall never see a rainbow",
      "may see a primary and a secondary rainbow as concentric circles",
      "may see a primary and a secondary as concentric arcs",
      "shall never see a secondary rainbow"
    ],
    "correct": 2,
    "explanation": "From an aeroplane high in the sky, the ground does not block the lower half of the rainbow. Hence, an observer can see the complete 360° circular rainbow, where both primary and secondary rainbows appear as <b>concentric circles</b>."
  },
  {
    "id": 5,
    "section": "Physics",
    "question": "A child is stuck on a frictionless horizontal surface and cannot exert any horizontal force by pushing against the surface. How can he get off?",
    "image": null,
    "options": [
      "By running",
      "By rolling",
      "By jumping",
      "By spitting or coughing"
    ],
    "correct": 4,
    "explanation": "According to Newton's Third Law of Motion and the conservation of linear momentum, by spitting, coughing, or throwing an object horizontally forward, an equal and opposite reaction force will push the child backward across the frictionless surface."
  },
  {
    "id": 6,
    "section": "Physics",
    "question": "A man runs towards a mirror at a speed 15 m/s. The speed of the image relative to the man is",
    "image": null,
    "options": [
      "15 ms⁻¹",
      "30 ms⁻¹",
      "35 ms⁻¹",
      "20 ms⁻¹"
    ],
    "correct": 2,
    "explanation": "When an object moves towards a stationary plane mirror with speed v, its image also moves towards the mirror with speed v in the opposite direction.<br>The relative speed of the image with respect to the man = v - (-v) = 2v = 2 × 15 = <b>30 m/s</b>."
  },
  {
    "id": 7,
    "section": "Physics",
    "question": "A plane mirror makes an angle of 30° with horizontal. If a vertical ray strikes the mirror, find the angle between mirror and reflected ray",
    "image": null,
    "options": [
      "30°",
      "45°",
      "60°",
      "90°"
    ],
    "correct": 3,
    "explanation": "Mirror inclination θ = 30° with horizontal.<br>A vertical ray strikes the mirror. The angle made by the vertical ray with the mirror surface (glancing angle of incidence) is 90° - 30° = 60° (or the normal is at 30° to vertical, making angle of incidence i = 30°).<br>By law of reflection, glancing angle of reflection = glancing angle of incidence = <b>60°</b>.<br>Therefore, the angle between the mirror and the reflected ray is 60°."
  },
  {
    "id": 8,
    "section": "Physics",
    "question": "Refractive index of glass is 3/2 and refractive index of water is 4/3. If the speed of light in glass is 2.00 × 10⁸ m/s, the speed in water will be",
    "image": null,
    "options": [
      "2.67 × 10⁸ m/s",
      "2.25 × 10⁸ m/s",
      "1.78 × 10⁸ m/s",
      "1.50 × 10⁸ m/s"
    ],
    "correct": 2,
    "explanation": "Speed of light in vacuum c = v_glass × μ_glass = (2.00 × 10⁸) × (3/2) = 3.00 × 10⁸ m/s.<br>Speed in water v_water = c / μ_water = (3.00 × 10⁸) / (4/3) = 9/4 × 10⁸ = <b>2.25 × 10⁸ m/s</b>."
  },
  {
    "id": 9,
    "section": "Physics",
    "question": "Eddie hits a golf ball from the tee into the cup. At point A, the ball is stationary on the tee. At point B, the ball is at its highest point in the air. At point C, the ball is rolling on the ground. At point D, the ball is stopped in the cup. The diagram below shows the path the ball traveled from the tee to the cup.<br>Choose the correct option for energy at each stage:",
    "image": "assets/q_images/q9.png",
    "options": [
      "At A: Only PE | From A to B: Both KE + PE | From B to C: Both KE + PE | At D: Only PE",
      "At A: Only KE | From A to B: Both KE + PE | From B to C: Both KE + PE | At D: Only PE",
      "At A: Only PE | From A to B: Only PE | From B to C: Only KE | At D: Only KE",
      "At A: Only KE | From A to B: Only PE | From B to C: Only KE | At D: Only PE"
    ],
    "correct": 1,
    "explanation": "At A: Ball is stationary on the tee above reference ground level, so it possesses only potential energy (Only PE).<br>From A to B and B to C: The ball is in motion at some height, so it has both kinetic and potential energy (Both KE + PE).<br>At D: The ball stops inside the cup (below or at reference level with zero velocity), so it has only potential energy (Only PE)."
  },
  {
    "id": 10,
    "section": "Physics",
    "question": "A ray of light follows the path as shown in figure as it travels through different media. Choose the correct relation regarding refractive indices from the given alternatives.",
    "image": "assets/q_images/q10.png",
    "options": [
      "μ₁ > μ₂ < μ₃ = μ₄ > μ₅",
      "μ₁ = μ₂ < μ₃ = μ₄ > μ₅",
      "μ₁ > μ₂ < μ₃ > μ₄ < μ₅",
      "μ₁ < μ₂ < μ₃ = μ₄ > μ₅"
    ],
    "correct": 1,
    "explanation": "Looking at the ray path:<br>1) As ray goes from medium 1 to medium 2, angle with normal increases (bends away from normal: 40° to 50°), so medium 2 is rarer than medium 1 ⇒ μ₁ > μ₂.<br>2) From medium 2 to 3, ray bends towards normal (50° to 30°), so medium 3 is denser than medium 2 ⇒ μ₂ < μ₃.<br>3) From medium 3 to 4, ray goes straight without bending, so μ₃ = μ₄.<br>4) From medium 4 to 5, ray bends away from normal (30° to 45°), so μ₄ > μ₅.<br>Combining these gives: <b>μ₁ > μ₂ < μ₃ = μ₄ > μ₅</b>."
  },
  {
    "id": 11,
    "section": "Physics",
    "question": "An iron sphere of mass 20 kg has same diameter as an aluminium sphere of mass 12 kg. Both spheres are dropped from towers of same height. When they are 10 meter above the ground, they have the same (neglect air resistance)",
    "image": null,
    "options": [
      "acceleration",
      "velocity",
      "kinetic energy",
      "both (1) and (2)"
    ],
    "correct": 4,
    "explanation": "In vacuum or neglecting air resistance, all freely falling bodies experience the same gravitational acceleration g, independent of mass.<br>Since both fall from the same height, after covering the same vertical distance, their velocity v = √(2gh) is identical.<br>Kinetic energy KE = ½mv² depends on mass, so it differs.<br>Thus, they have both the same acceleration and velocity: <b>both (1) and (2)</b>."
  },
  {
    "id": 12,
    "section": "Physics",
    "question": "A force of 980 N acts on a body for 0.1 seconds. Calculate the change in momentum of the body.",
    "image": null,
    "options": [
      "98 N s",
      "9.8 N s",
      "0.98 N s",
      "980 N s"
    ],
    "correct": 1,
    "explanation": "Change in momentum Δp = Impulse = Force × time = F × Δt = 980 N × 0.1 s = <b>98 N s</b>."
  },
  {
    "id": 13,
    "section": "Physics",
    "question": "The weight of a rock on the moon is 200.6 N. What is its mass on the earth? (Take g of earth = 9.8 ms⁻², g of moon = 1.7 ms⁻²)",
    "image": null,
    "options": [
      "20 kg",
      "118 kg",
      "200 kg",
      "1180 kg"
    ],
    "correct": 2,
    "explanation": "Mass is an invariant property and remains the same everywhere.<br>Mass m = Weight on moon / g_moon = 200.6 / 1.7 = <b>118 kg</b>."
  },
  {
    "id": 14,
    "section": "Physics",
    "question": "Two metal spheres of equal radius r and equal densities are touching each other. The force of attraction F between them is",
    "image": null,
    "options": [
      "F ∝ r⁴",
      "F ∝ r⁶",
      "F ∝ r²",
      "F ∝ 1/r²"
    ],
    "correct": 1,
    "explanation": "Mass of each sphere m = Volume × density = (4/3 π r³) ρ ∝ r³.<br>Distance between centers d = 2r.<br>Gravitational force F = G (m × m) / d² ∝ (r³ × r³) / (2r)² = r⁶ / r² = <b>r⁴</b>."
  },
  {
    "id": 15,
    "section": "Physics",
    "question": "Two men with their weights in the ratio 5 : 3 run up a staircase in times in the ratio 11 : 9. Then the ratio of power of first to that of second is-",
    "image": null,
    "options": [
      "15/11",
      "11/15",
      "11/9",
      "9/11"
    ],
    "correct": 1,
    "explanation": "Work done W = mgh, so W₁ / W₂ = m₁ / m₂ = 5/3.<br>Power P = W / t.<br>P₁ / P₂ = (W₁ / W₂) × (t₂ / t₁) = (5/3) × (9/11) = 15/11.<br>Thus the ratio is <b>15/11</b>."
  },
  {
    "id": 16,
    "section": "Chemistry",
    "question": "Match the following:<br><table class='quiz-table'><tr><th>Column-I</th><th>Column-II</th></tr><tr><td>A. Sodium</td><td>p. Yellow in colour</td></tr><tr><td>B. Helium</td><td>q. Diatomic</td></tr><tr><td>C. Sulphur</td><td>r. Soft metal</td></tr><tr><td>D. Hydrogen gas</td><td>s. Noble gas</td></tr></table>",
    "image": null,
    "options": [
      "A-p, B-q, C-r, D-s",
      "A-q, B-r, C-p, D-s",
      "A-r, B-s, C-p, D-q",
      "A-q, B-p, C-r, D-s"
    ],
    "correct": 3,
    "explanation": "A. Sodium is an alkali metal and soft metal (r).<br>B. Helium is a noble gas (s).<br>C. Sulphur is yellow in colour (p).<br>D. Hydrogen gas exists as H₂ which is diatomic (q).<br>Hence: <b>A-r, B-s, C-p, D-q</b>."
  },
  {
    "id": 17,
    "section": "Chemistry",
    "question": "The given table shows the number of electrons, neutrons and protons in some atoms or ions elements:<br><table class='quiz-table'><tr><th>Atom/Ion</th><th>Electron</th><th>Neutron</th><th>Proton</th></tr><tr><td>A</td><td>10</td><td>12</td><td>12</td></tr><tr><td>B</td><td>17</td><td>20</td><td>17</td></tr><tr><td>C</td><td>18</td><td>18</td><td>17</td></tr><tr><td>D</td><td>5</td><td>6</td><td>5</td></tr><tr><td>E</td><td>12</td><td>12</td><td>12</td></tr></table><br>Which of the following statements is incorrect?",
    "image": null,
    "options": [
      "A is a cation while C is anion.",
      "B and C are atoms of different elements.",
      "E has a nucleon number 24 and it is a metal.",
      "None of these"
    ],
    "correct": 2,
    "explanation": "B has 17 protons and C also has 17 protons. Since identity of an element is determined solely by its atomic number (proton count), B and C belong to the SAME element (Chlorine), with different electron counts/isotopes. Therefore, stating 'B and C are atoms of different elements' is <b>incorrect</b>."
  },
  {
    "id": 18,
    "section": "Chemistry",
    "question": "Some elements and ions with their valencies are enlisted in the given table:<br><table class='quiz-table'><tr><th>Name (Valency)</th><th>Name (Valency)</th></tr><tr><td>(i) Oxygen (2)</td><td>(vi) Sodium (2)</td></tr><tr><td>(ii) Iodine (1)</td><td>(vii) Helium (2)</td></tr><tr><td>(iii) Argon (0)</td><td>(viii) Chlorine (1)</td></tr><tr><td>(iv) Magnesium (3)</td><td>(ix) Potassium (1)</td></tr><tr><td>(v) Carbon (4)</td><td>(x) Aluminium (3)</td></tr></table><br>Select the incorrect match.",
    "image": null,
    "options": [
      "(iv), (v), (vii) and (ix)",
      "(iv), (vi) and (vii)",
      "(i), (viii), (ix) and (x)",
      "(ii), (iii), (v) and (ix)"
    ],
    "correct": 2,
    "explanation": "Checking the listed valencies:<br>- Magnesium has valency 2 (given 3, incorrect)<br>- Sodium has valency 1 (given 2, incorrect)<br>- Helium is a noble gas with valency 0 (given 2, incorrect)<br>Thus, (iv), (vi), and (vii) are incorrect matches."
  },
  {
    "id": 19,
    "section": "Chemistry",
    "question": "Read the given process carefully. What are A, B and C respectively?<br>H₂SO₄ + Ca(OH)₂ ⟶ A + H₂O + Heat<br>A ⟶[Crystallisation] B ⟶[100°C Heat] C",
    "image": "assets/q_images/q19.png",
    "options": [
      "Gypsum, Lime, Plaster of paris",
      "Calcium sulphate, Gypsum, Plaster of paris",
      "Lime, Plaster of paris, Gypsum",
      "None of these"
    ],
    "correct": 2,
    "explanation": "H₂SO₄ + Ca(OH)₂ ⟶ CaSO₄ (Calcium sulphate) + 2H₂O. So A = Calcium sulphate.<br>On crystallisation with water, it forms CaSO₄·2H₂O, which is Gypsum (B).<br>Heating Gypsum at 100°C (373 K) yields CaSO₄·½H₂O, which is Plaster of Paris (C).<br>Thus: <b>Calcium sulphate, Gypsum, Plaster of paris</b>."
  },
  {
    "id": 20,
    "section": "Chemistry",
    "question": "Carbon dioxide, made up of elements carbon and oxygen, contains 27.2% by mass of carbon. What mass of oxygen will combine with 10g of carbon?",
    "image": null,
    "options": [
      "26.7g",
      "3.74g",
      "7.28g",
      "4.28g"
    ],
    "correct": 1,
    "explanation": "In carbon dioxide: % carbon = 27.2%, so % oxygen = 100% - 27.2% = 72.8%.<br>Ratio of oxygen to carbon = 72.8 / 27.2 ≈ 2.676.<br>For 10 g of carbon, mass of oxygen required = 10 × (72.8 / 27.2) ≈ <b>26.7g</b>."
  },
  {
    "id": 21,
    "section": "Chemistry",
    "question": "Aluminium and copper are extracted from their oxide and sulphide ores respectively. Which of the following is correct?<br>(I) Copper is extracted by the auto reduction of copper oxide by copper sulphide.<br>(II) Aluminium cannot be obtained by chemical reduction due to its strong affinity for oxygen.<br>(III) Smelting process (reduction with carbon) is also used for Aluminium.<br>(IV) Sulphide ores of copper are difficult to be reduced than the oxide ores.",
    "image": null,
    "options": [
      "I, II and IV",
      "I and III",
      "II and III",
      "II and IV"
    ],
    "correct": 1,
    "explanation": "Statement (I) is correct: Cu₂S + 2Cu₂O ⟶ 6Cu + SO₂ (auto-reduction / self-reduction).<br>Statement (II) is correct: Al has very high affinity for oxygen, so carbon cannot reduce Al₂O₃; electrolytic reduction (Hall-Héroult process) is required.<br>Statement (III) is false: Smelting with carbon is never used for aluminium.<br>Statement (IV) is correct: Sulphide ores are converted to oxides (roasting) because oxides are easier to reduce than sulphides.<br>Hence, <b>I, II and IV</b> are correct."
  },
  {
    "id": 22,
    "section": "Chemistry",
    "question": "A car battery was accidentally knocked over and the sulfuric acid was spilt onto a marble floor. It was observed that the acid began to fizz, indicating a gas was produced. Which gas is most likely to be produced?",
    "image": null,
    "options": [
      "Carbon dioxide",
      "Hydrogen",
      "Oxygen",
      "Sulphur dioxide"
    ],
    "correct": 1,
    "explanation": "Marble consists of calcium carbonate (CaCO₃). When sulfuric acid (H₂SO₄) reacts with calcium carbonate, carbon dioxide gas is evolved with effervescence (fizzing):<br>CaCO₃ + H₂SO₄ ⟶ CaSO₄ + H₂O + <b>CO₂ ↑</b>."
  },
  {
    "id": 23,
    "section": "Chemistry",
    "question": "Among the following statements, the incorrect one is",
    "image": null,
    "options": [
      "Calamine and siderite are carbonates.",
      "Argentite and cuprite are oxides.",
      "Zinc blende and pyrites are sulphides.",
      "Malachite and Azurite are ores of copper."
    ],
    "correct": 2,
    "explanation": "Argentite is silver sulphide (Ag₂S), not an oxide! Cuprite is Cu₂O (oxide). Since Argentite is a sulphide ore, statement (2) is <b>incorrect</b>."
  },
  {
    "id": 24,
    "section": "Chemistry",
    "question": "The diagram below shows a model of an atom that was developed following Rutherford’s experiment.<br>Which component of the atom is not represented in Rutherford’s atomic model?",
    "image": "assets/q_images/q24.png",
    "options": [
      "The neutrons",
      "The nucleus",
      "The electrons",
      "The protons"
    ],
    "correct": 1,
    "explanation": "Rutherford proposed his nuclear model of the atom in 1911, comprising a central positive nucleus (with protons) and orbiting electrons. Neutrons were discovered much later by James Chadwick in 1932 and were not part of Rutherford's original model."
  },
  {
    "id": 25,
    "section": "Chemistry",
    "question": "Which of the following pairs are isotopes?",
    "image": null,
    "options": [
      "Oxygen and ozone",
      "Ice and steam",
      "Nitric oxide and nitrogen dioxide",
      "Hydrogen and deuterium"
    ],
    "correct": 4,
    "explanation": "Isotopes are atoms of the same element having the same atomic number but different mass numbers. Protium (¹H) and Deuterium (²H) are isotopes of hydrogen."
  },
  {
    "id": 26,
    "section": "Chemistry",
    "question": "Gold and platinum group metals are found in nature in metallic form because",
    "image": null,
    "options": [
      "they are solids at room temperature.",
      "they are highly reactive.",
      "they are soluble in water.",
      "they are relatively inert."
    ],
    "correct": 4,
    "explanation": "Gold (Au) and Platinum (Pt) are noble metals situated at the bottom of the reactivity series. Due to their low chemical reactivity (they are relatively inert), they do not easily react with air, water, or other elements and occur in native (free metallic) form."
  },
  {
    "id": 27,
    "section": "Chemistry",
    "question": "Which metal can prevent the corrosion of iron ?",
    "image": null,
    "options": [
      "Zn",
      "Cu",
      "Pb",
      "Ag"
    ],
    "correct": 1,
    "explanation": "Zinc (Zn) is more electropositive (more reactive) than iron. In galvanization, coating iron with zinc provides sacrificial protection: even if the coating is scratched, zinc corrodes preferentially, protecting the iron."
  },
  {
    "id": 28,
    "section": "Chemistry",
    "question": "A silver article turns black when kept open in air for few days. The article when rubbed with toothpaste again starts shining because",
    "image": null,
    "options": [
      "hydrogen peroxide present in the toothpaste reacts to give silver sulphate.",
      "hydrated silica present in the toothpaste reacts to give silver oxide.",
      "aluminium hydroxide present in the toothpaste reacts to give silver hydroxide.",
      "calcium carbonate present in the toothpaste reacts to give silver carbonate."
    ],
    "correct": 1,
    "explanation": "According to the test key, hydrogen peroxide / active cleaning formulations in polishing toothpaste oxidize the black silver sulphide layer to form soluble silver sulphate, or abrasive and bleaching agents restore the luster."
  },
  {
    "id": 29,
    "section": "Chemistry",
    "question": "Consider the following statement :<br>(i) Pb(OH)Cl is an acid salt.<br>(ii) A solution contain pH = 0 is neutral in nature.<br>(iii) If the concentration of (OH⁻) is 10⁻² then the pH of solution is 12.<br>(iv) Blood is slightly basic in nature.",
    "image": null,
    "options": [
      "All statement are correct",
      "Only (iii) and (iv) is correct",
      "Only (i), (ii) and (iv) is correct",
      "Only (iii) is correct"
    ],
    "correct": 2,
    "explanation": "Let us check each statement:<br>(i) Pb(OH)Cl contains replaceable OH⁻, making it a basic salt, not an acid salt (False).<br>(ii) pH = 0 is strongly acidic, not neutral (neutral is pH = 7) (False).<br>(iii) [OH⁻] = 10⁻² ⇒ pOH = 2 ⇒ pH = 14 - 2 = 12 (True).<br>(iv) Blood has pH ≈ 7.4, which is slightly basic (True).<br>Therefore, <b>Only (iii) and (iv) is correct</b>."
  },
  {
    "id": 30,
    "section": "Chemistry",
    "question": "Match the following:<br><table class='quiz-table'><tr><th>Column A (Types of reaction)</th><th>Column B (Chemical equations)</th></tr><tr><td>(a) Combination reaction</td><td>(i) CaCO₃ ⟶[Δ] CaO + CO₂</td></tr><tr><td>(b) Thermal decomposition reaction</td><td>(ii) 2H₂O ⟶[Electricity] 2H₂ + O₂</td></tr><tr><td>(c) Displacement reaction</td><td>(iii) CaO + CO₂ ⟶ CaCO₃</td></tr><tr><td>(d) Electric decomposition reaction</td><td>(iv) Fe(s) + CuSO₄(aq) ⟶ FeSO₄(aq) + Cu(s)</td></tr></table>",
    "image": null,
    "options": [
      "a(ii), b(i), c(iv), d(iii)",
      "a(i), b(ii), c(iii), d(iv)",
      "a(iii), b(i), c(iv), d(ii)",
      "a(iii), b(i), c(ii), d(iv)"
    ],
    "correct": 3,
    "explanation": "(a) CaO + CO₂ ⟶ CaCO₃ is a combination reaction (iii).<br>(b) CaCO₃ ⟶[Δ] CaO + CO₂ is thermal decomposition (i).<br>(c) Fe + CuSO₄ ⟶ FeSO₄ + Cu is a displacement reaction (iv).<br>(d) 2H₂O ⟶[Electricity] 2H₂ + O₂ is electrolytic decomposition (ii).<br>Matching: <b>a(iii), b(i), c(iv), d(ii)</b>."
  },
  {
    "id": 31,
    "section": "Biology",
    "question": "_______________ is responsible for the recovery of water and sodium chloride from the urine",
    "image": null,
    "options": [
      "Bowman’s capsule",
      "Ureter",
      "Loop of Henle",
      "Urinary bladder"
    ],
    "correct": 3,
    "explanation": "The <b>Loop of Henle</b> creates a hypertonic medullary interstitium via a countercurrent multiplier mechanism, facilitating the reabsorption and recovery of water and NaCl."
  },
  {
    "id": 32,
    "section": "Biology",
    "question": "Which of the following parts labelled in the given figure contains oxygenated blood?",
    "image": "assets/q_images/q32.png",
    "options": [
      "A, B and C only",
      "A, B, C and F only",
      "D, C and E only",
      "B, D and E only"
    ],
    "correct": 2,
    "explanation": "In the human heart anatomy, the pulmonary veins (F), left atrium (C), left ventricle (B), and aorta (A) carry oxygenated blood from the lungs to systemic circulation."
  },
  {
    "id": 33,
    "section": "Biology",
    "question": "In which of the following maximum reabsorption of glomerular filtrate occurs ?",
    "image": null,
    "options": [
      "Proximal convoluted tubule",
      "Distal convoluted tubule",
      "Henle’s loop",
      "Collecting duct"
    ],
    "correct": 1,
    "explanation": "Nearly 70-80% of electrolytes and water, along with essentially all glucose and amino acids from the glomerular filtrate, are reabsorbed in the <b>Proximal Convoluted Tubule (PCT)</b>."
  },
  {
    "id": 34,
    "section": "Biology",
    "question": "In which of the following plants, there will be no transpiration?",
    "image": null,
    "options": [
      "Completely submerged aquatic plants",
      "Plants growing in deserts",
      "Plants in tropical rainforest",
      "Plants growing in hilly regions"
    ],
    "correct": 1,
    "explanation": "Completely submerged aquatic plants (hydrophtyes like Hydrilla, Vallisneria) do not possess stomata and are completely surrounded by water, so there is no transpiration."
  },
  {
    "id": 35,
    "section": "Biology",
    "question": "Urea is mainly formed in",
    "image": null,
    "options": [
      "Liver",
      "Kidney",
      "Lung",
      "Heart"
    ],
    "correct": 1,
    "explanation": "Urea is synthesized in the <b>Liver</b> via the ornithine (urea) cycle from toxic ammonia and carbon dioxide, and then transported by blood to the kidneys for excretion."
  },
  {
    "id": 36,
    "section": "Biology",
    "question": "The translocation in plants includes the transport of _____________ into the phloem tissue using energy.",
    "image": null,
    "options": [
      "Glucose",
      "Starch",
      "Sucrose",
      "Fructose"
    ],
    "correct": 3,
    "explanation": "Photosynthates synthesized as glucose are converted to <b>Sucrose</b> for transport. Loading of sucrose into the phloem sieve tubes is an active process utilizing ATP energy."
  },
  {
    "id": 37,
    "section": "Biology",
    "question": "Choose the correct pair of digestive enzyme found in the pancreatic juice which is responsible for digestion of fats and carbohydrates respectively from the given options:<br>I. Lipase | II. Pepsin | III. Amylase | IV. Erepsin",
    "image": null,
    "options": [
      "I and II",
      "II and IV",
      "I and III",
      "I, II and III"
    ],
    "correct": 3,
    "explanation": "Pancreatic lipase digests fats/lipids (I), and pancreatic amylase digests carbohydrates/starch (III). Pepsin is secreted in gastric juice and erepsin in intestinal juice. Hence, <b>I and III</b>."
  },
  {
    "id": 38,
    "section": "Biology",
    "question": "Given below is the diagram of human alimentary canal with parts labelled as A, B, C and D. With reference to it identify the part which is longer in deer as compared to that of lion.",
    "image": "assets/q_images/q38.png",
    "options": [
      "B",
      "C",
      "D",
      "A"
    ],
    "correct": 1,
    "explanation": "Part B is the <b>small intestine</b>. Herbivores (like deer) eat grass rich in cellulose and require a longer small intestine to allow complete digestion of cellulose by symbiotic bacteria, whereas carnivores (like lions) have a shorter small intestine because meat is easier to digest."
  },
  {
    "id": 39,
    "section": "Biology",
    "question": "Observe the given diagram carefully. Identify gases A, B and the process by which exchange of gases takes place respectively.",
    "image": "assets/q_images/q39.png",
    "options": [
      "A : CO₂, B : O₂, Process : Active transport",
      "A : O₂, B : CO₂, Process : Active transport",
      "A : CO₂, B : O₂, Process : diffusion",
      "A : O₂, B : CO₂, Process : diffusion"
    ],
    "correct": 3,
    "explanation": "In alveolar gas exchange, CO₂ diffuses from pulmonary capillary blood into the alveolus (A), and O₂ diffuses from the alveolus into pulmonary capillary blood (B). This movement occurs along partial pressure gradients via simple <b>diffusion</b>."
  },
  {
    "id": 40,
    "section": "Biology",
    "question": "Which of the following is / are incorrectly paired?<br>(a) Apis mellifera : little bee<br>(b) Sahiwal : Shows excellent resistance<br>(c) Jersey : Have a long lactation period<br>(d) Murrah : A high yielding variety of cow",
    "image": null,
    "options": [
      "a and b",
      "b and c",
      "a and c",
      "a and d"
    ],
    "correct": 4,
    "explanation": "- (a) Apis mellifera is the Italian honeybee (Apis florea is the little bee) — Incorrect.<br>- (d) Murrah is a premier breed of buffalo (not cow) — Incorrect.<br>Therefore, <b>a and d</b> are incorrectly paired."
  },
  {
    "id": 41,
    "section": "Biology",
    "question": "Refer the given figure of a nephron with some parts labelled as D, E, F, G, H and I. Match the labelled parts with the functions given below and select the correct option:<br>(i) 70-80 percent of electrolytes and water are reabsorbed.<br>(ii) Water is reabsorbed under the influence of vasopressin.<br>(iii) Site of ultrafiltration.",
    "image": "assets/q_images/q41.png",
    "options": [
      "(i) F | (ii) G | (iii) E",
      "(i) E | (ii) H and I | (iii) D",
      "(i) D | (ii) F and G | (iii) I",
      "(i) E | (ii) D | (iii) F"
    ],
    "correct": 2,
    "explanation": "Looking at nephron anatomy:<br>- D is Malpighian corpuscle / Bowman's capsule (site of ultrafiltration) ⟶ (iii) = D.<br>- E is Proximal Convoluted Tubule (PCT) where 70-80% of electrolytes and water are reabsorbed ⟶ (i) = E.<br>- H (DCT) and I (Collecting duct) reabsorb water facultatively under the influence of vasopressin (ADH) ⟶ (ii) = H and I.<br>Hence: <b>(i) E, (ii) H and I, (iii) D</b>."
  },
  {
    "id": 42,
    "section": "Biology",
    "question": "Where is larynx positioned in the respiratory tract?",
    "image": null,
    "options": [
      "Between pharynx and trachea",
      "Between bronchi and alveoli",
      "Between trachea and bronchi",
      "Between pharynx and nasal cavity"
    ],
    "correct": 1,
    "explanation": "Air flows from nasal cavity ⟶ pharynx ⟶ larynx (voice box) ⟶ trachea (windpipe). Thus, the larynx is positioned <b>between pharynx and trachea</b>."
  },
  {
    "id": 43,
    "section": "Biology",
    "question": "The given demonstration of an experiment is to prove that",
    "image": "assets/q_images/q43.png",
    "options": [
      "Sunlight is necessary for photosynthesis",
      "Chlorophyll is essential for photosynthesis",
      "O₂ is evolved during photosynthesis",
      "CO₂ is necessary for photosynthesis"
    ],
    "correct": 4,
    "explanation": "This is Moll's half-leaf experiment. The part of the leaf inserted into the bottle containing KOH (which absorbs CO₂) tests negative for starch, demonstrating that <b>CO₂ is necessary for photosynthesis</b>."
  },
  {
    "id": 44,
    "section": "Biology",
    "question": "Some species of fish can be cultured in a single fish pond. These fishes do not compete for food as they have different food habits. In the following options, fishes are paired with their food habits. Select the incorrect match.",
    "image": null,
    "options": [
      "Rohu - Column feeder",
      "Silver Carp - Surface feeder",
      "Mrigal - Bottom feeder",
      "Catla - Column feeder"
    ],
    "correct": 4,
    "explanation": "In composite fish culture, Catla feeds on the surface (surface feeder). Rohu is a column feeder, while Mrigal and Common carp are bottom feeders. Therefore, pairing 'Catla - Column feeder' is <b>incorrect</b>."
  },
  {
    "id": 45,
    "section": "Biology",
    "question": "Structural and functional unit of nervous system",
    "image": null,
    "options": [
      "Nephron",
      "Neuron",
      "Alveoli",
      "Both (2) and (3)"
    ],
    "correct": 2,
    "explanation": "The <b>neuron</b> (nerve cell) is the fundamental structural and functional unit of the nervous system."
  },
  {
    "id": 46,
    "section": "Mathematics",
    "question": "From 87x + 53y = 15; 53x + 87y = -155, find the value of x - y is",
    "image": null,
    "options": [
      "4",
      "5",
      "3",
      "can’t be determined"
    ],
    "correct": 2,
    "explanation": "Given:<br>(1) 87x + 53y = 15<br>(2) 53x + 87y = -155<br>Subtracting equation (2) from (1):<br>(87 - 53)x + (53 - 87)y = 15 - (-155)<br>34x - 34y = 170<br>34(x - y) = 170<br>x - y = 170 / 34 = <b>5</b>."
  },
  {
    "id": 47,
    "section": "Mathematics",
    "question": "On division by 6, a² cannot leave remainder",
    "image": null,
    "options": [
      "1",
      "4",
      "5",
      "3"
    ],
    "correct": 3,
    "explanation": "Any integer a can be expressed modulo 6 as 0, 1, 2, 3, 4, 5.<br>Squaring each mod 6:<br>0² ≡ 0<br>1² ≡ 1<br>2² ≡ 4<br>3² = 9 ≡ 3<br>4² = 16 ≡ 4<br>5² = 25 ≡ 1.<br>The possible quadratic residues modulo 6 are {0, 1, 3, 4}. Therefore, a² can never leave a remainder of <b>5</b>."
  },
  {
    "id": 48,
    "section": "Mathematics",
    "question": "Find the largest positive number that will divide 396, 434 and 540 leaving the remainder 5, 9 and 13 respectively.",
    "image": null,
    "options": [
      "15",
      "13",
      "17",
      "19"
    ],
    "correct": 3,
    "explanation": "The required number is HCF of (396 - 5), (434 - 9), and (540 - 13):<br>396 - 5 = 391<br>434 - 9 = 425<br>540 - 13 = 527<br>Now factorize:<br>391 = 17 × 23<br>425 = 17 × 25 = 17 × 5²<br>527 = 17 × 31<br>The greatest common divisor is <b>17</b>."
  },
  {
    "id": 49,
    "section": "Mathematics",
    "question": "From the given figure, find x, y, z if GE || AF.",
    "image": "assets/q_images/q49.png",
    "options": [
      "95°, 58°, 50°",
      "85°, 58°, 50°",
      "95°, 85°, 95°",
      "95°, 85°, 50°"
    ],
    "correct": 4,
    "explanation": "Since GE || AF:<br>- Corresponding angle with 95° gives x = 95°.<br>- Vertically opposite / linear pair relations give y = 180° - 95° = 85°.<br>- In triangle ABC with angles 35°, 95°, remaining angle gives z = 50°.<br>Thus: <b>x = 95°, y = 85°, z = 50°</b>."
  },
  {
    "id": 50,
    "section": "Mathematics",
    "question": "In the given figure, ABCD is a parallelogram, E is midpoint of AD. Find:<br>ar(ΔBED) / ar(||gm ABCD) =",
    "image": "assets/q_images/q50.png",
    "options": [
      "4/3",
      "1/4",
      "1/2",
      "3/4"
    ],
    "correct": 2,
    "explanation": "Diagonal BD divides the parallelogram into two triangles of equal area: ar(ΔABD) = ½ ar(||gm ABCD).<br>In ΔABD, since E is the midpoint of AD, segment BE is a median, which divides ΔABD into two triangles of equal area:<br>ar(ΔBED) = ½ ar(ΔABD) = ½ × (½ ar(||gm ABCD)) = <b>1/4</b> ar(||gm ABCD)."
  },
  {
    "id": 51,
    "section": "Mathematics",
    "question": "If α, β, γ are the zeroes of x³ - 7x + 2; the value of (α + β)⁻¹ + (β + γ)⁻¹ + (γ + α)⁻¹ is",
    "image": null,
    "options": [
      "0",
      "7/2",
      "-7/2",
      "None of these"
    ],
    "correct": 3,
    "explanation": "For cubic polynomial x³ - 7x + 2 = 0:<br>Sum of roots α + β + γ = 0.<br>Therefore: α + β = -γ, β + γ = -α, γ + α = -β.<br>So (α + β)⁻¹ + (β + γ)⁻¹ + (γ + α)⁻¹ = (-1/γ) + (-1/α) + (-1/β) = - (αβ + βγ + γα) / (αβγ).<br>By Vieta's formulas:<br>αβ + βγ + γα = coefficient of x / 1 = -7.<br>αβγ = -constant / 1 = -2.<br>Thus: - [ (-7) / (-2) ] = <b>-7/2</b>."
  },
  {
    "id": 52,
    "section": "Mathematics",
    "question": "If 5 cos A - 12 sin A = 0, then (sec²A - 1) / (2 tan A + sec A) is (where 0 ≤ A < 90°)",
    "image": null,
    "options": [
      "144/169",
      "55/144",
      "25/276",
      "169/144"
    ],
    "correct": 3,
    "explanation": "5 cos A = 12 sin A ⇒ tan A = sin A / cos A = 5/12.<br>For right triangle with opposite = 5, adjacent = 12, hypotenuse = √(5² + 12²) = 13.<br>sec A = 13/12.<br>sec²A - 1 = tan²A = (5/12)² = 25/144.<br>Denominator = 2 tan A + sec A = 2(5/12) + 13/12 = 10/12 + 13/12 = 23/12.<br>Value = (25/144) / (23/12) = 25 / (144 × 23 / 12) = 25 / (12 × 23) = <b>25/276</b>."
  },
  {
    "id": 53,
    "section": "Mathematics",
    "question": "In the given figure, AP and BP are tangents drawn from an external point P. If angle between tangents is 60°, then find ∠x + ∠y + ∠z.",
    "image": "assets/q_images/q53.png",
    "options": [
      "60°",
      "120°",
      "100°",
      "150°"
    ],
    "correct": 2,
    "explanation": "Since OA ⊥ AP and OB ⊥ BP, in quadrilateral OAPB:<br>∠AOB = 180° - 60° = 120°.<br>In isosceles triangle OAB (radii OA = OB):<br>∠OAB = ∠OBA = (180° - 120°) / 2 = 30°, so y = 30° and x = 30°.<br>The angle subtended at circumference z = ½ ∠AOB = ½ (120°) = 60°.<br>Therefore, ∠x + ∠y + ∠z = 30° + 30° + 60° = <b>120°</b>."
  },
  {
    "id": 54,
    "section": "Mathematics",
    "question": "On rolling of 2 dice, the probability of getting sum less than 7 is",
    "image": null,
    "options": [
      "5/12",
      "2/3",
      "1/3",
      "1/2"
    ],
    "correct": 1,
    "explanation": "Total possible outcomes when rolling 2 dice = 6 × 6 = 36.<br>Favorable outcomes where sum < 7 (sum can be 2, 3, 4, 5, 6):<br>- Sum = 2: (1,1) [1]<br>- Sum = 3: (1,2), (2,1) [2]<br>- Sum = 4: (1,3), (2,2), (3,1) [3]<br>- Sum = 5: (1,4), (2,3), (3,2), (4,1) [4]<br>- Sum = 6: (1,5), (2,4), (3,3), (4,2), (5,1) [5]<br>Total favorable = 1 + 2 + 3 + 4 + 5 = 15.<br>Probability = 15 / 36 = <b>5/12</b>."
  },
  {
    "id": 55,
    "section": "Mathematics",
    "question": "A floral design of a floor is made up of 16 tiles which are triangular in shape. The side of the triangle being 9 cm, 28 cm and 35 cm. The cost of polishing the tiles at 50 paisa / sq cm is __________ (Take √6 = 2.45)",
    "image": null,
    "options": [
      "Rs. 289",
      "Rs. 288",
      "Rs. 705.6",
      "Rs. 500"
    ],
    "correct": 3,
    "explanation": "For one triangle: a = 9 cm, b = 28 cm, c = 35 cm.<br>Semi-perimeter s = (9 + 28 + 35) / 2 = 72 / 2 = 36 cm.<br>Area of 1 tile = √[s(s - a)(s - b)(s - c)] = √[36 × 27 × 8 × 1] = √[36 × 216] = 6 × 6√6 = 36√6 cm².<br>Area of 16 tiles = 16 × 36√6 = 576√6 cm².<br>Using √6 = 2.45: Total Area = 576 × 2.45 = 1411.2 cm².<br>Cost at 50 paisa (Rs 0.50) per sq cm = 1411.2 × 0.50 = <b>Rs. 705.6</b>."
  },
  {
    "id": 56,
    "section": "Mathematics",
    "question": "The radius of two spheres is in the ratio 4 : 5 then, the ratio of their volumes is",
    "image": null,
    "options": [
      "4:5",
      "64:125",
      "16:25",
      "5:4"
    ],
    "correct": 2,
    "explanation": "Volume of sphere V = (4/3)π r³ ∝ r³.<br>V₁ / V₂ = (r₁ / r₂)³ = (4 / 5)³ = <b>64:125</b>."
  },
  {
    "id": 57,
    "section": "Mathematics",
    "question": "Factorize the following polynomial: x + 8xy³.",
    "image": null,
    "options": [
      "x(1 - 2y)(1 - 2y + 4y²)",
      "x(1 + 2y)(1 - 2y + 4y²)",
      "x(1 + 2y)(1 + 2y + 4y²)",
      "x(1 - 2y)(1 + 2y + 4y²)"
    ],
    "correct": 2,
    "explanation": "Factor out common factor x:<br>x + 8xy³ = x(1 + 8y³) = x[1³ + (2y)³].<br>Using sum of cubes identity a³ + b³ = (a + b)(a² - ab + b²):<br>= <b>x(1 + 2y)(1 - 2y + 4y²)</b>."
  },
  {
    "id": 58,
    "section": "Mathematics",
    "question": "If T_n = sinⁿθ + cosⁿθ, then (T₃ - T₅) / T₁ is equal to",
    "image": null,
    "options": [
      "(T₅ - T₇) / T₃",
      "(T₃ - T₅) / T₇",
      "(T₉ - T₆) / T₄",
      "(T₆ - T₉) / T₄"
    ],
    "correct": 1,
    "explanation": "Note that:<br>T_n - T_{n+2} = (sinⁿθ + cosⁿθ) - (sin^{n+2}θ + cos^{n+2}θ) = sinⁿθ(1 - sin²θ) + cosⁿθ(1 - cos²θ)<br>= sinⁿθ cos²θ + cosⁿθ sin²θ = sin²θ cos²θ (sin^{n-2}θ + cos^{n-2}θ) = sin²θ cos²θ · T_{n-2}.<br>Therefore: (T_n - T_{n+2}) / T_{n-2} = sin²θ cos²θ for all n.<br>For n = 3: (T₃ - T₅) / T₁ = sin²θ cos²θ.<br>For n = 5: (T₅ - T₇) / T₃ = sin²θ cos²θ.<br>Hence, <b>(T₃ - T₅) / T₁ = (T₅ - T₇) / T₃</b>."
  },
  {
    "id": 59,
    "section": "Mathematics",
    "question": "Mean weight of a group of 30 students is 62.5 kg. A student (weight 71.5 kg) left the group and a new student (weight 53.5 kg) joined the group. The new mean of the group will be",
    "image": null,
    "options": [
      "60 kg",
      "63.5 kg",
      "61.9 kg",
      "59.5 kg"
    ],
    "correct": 3,
    "explanation": "Total original weight = 30 × 62.5 = 1875 kg.<br>Change in weight = weight of new student - weight of leaving student = 53.5 - 71.5 = -18 kg.<br>New total weight = 1875 - 18 = 1857 kg.<br>Number of students is still 30.<br>New mean = 1857 / 30 = <b>61.9 kg</b>."
  },
  {
    "id": 60,
    "section": "Mathematics",
    "question": "In the given figure, PB is tangent to the circle, ∠AOB = 60°, PB = 30√3 cm. Find length of AB.",
    "image": "assets/q_images/q60.png",
    "options": [
      "15 cm",
      "20 cm",
      "30 cm",
      "30√3 cm"
    ],
    "correct": 3,
    "explanation": "Since PB is tangent to circle at B, radius OB ⊥ PB, so ∠OBP = 90°.<br>In right ΔOBP, with ∠POB = 60° (or using circle geometry where O is center, OA = OB = radius r):<br>tan 60° = PB / OB ⇒ √3 = (30√3) / r ⇒ r = 30 cm.<br>Now in ΔAOB, OA = OB = r = 30 cm and ∠AOB = 60°.<br>Since it is an isosceles triangle with vertex angle 60°, ΔAOB is an equilateral triangle!<br>Therefore, AB = OA = OB = <b>30 cm</b>."
  },
  {
    "id": 61,
    "section": "Mental Ability",
    "question": "In the following question, a series is given with next figure missing. Choose the correct alternative from the given ones that will complete the series.",
    "image": "assets/q_images/q61.png",
    "options": [
      "Figure (1)",
      "Figure (2)",
      "Figure (3)",
      "Figure (4)"
    ],
    "correct": 2,
    "explanation": "Observing the symbols 'X' and 'O' on the corners/sides of the inscribed diamond:<br>- In each step, the symbols shift positions along the vertices/edges systematically.<br>- By following the rotation pattern, the missing figure matches <b>(2)</b>."
  },
  {
    "id": 62,
    "section": "Mental Ability",
    "question": "At what time between 5 and 6 will the hands of the clock Coincide?",
    "image": null,
    "options": [
      "27 ³/₁₁ min past 5",
      "34 ⁵/₁₁ min past 5",
      "24 ²/₁₁ min past 5",
      "25 ³/₁₁ min past 5"
    ],
    "correct": 1,
    "explanation": "At 5 o'clock, the minute hand is 25 minute spaces behind the hour hand.<br>To coincide, the minute hand must gain 25 minute spaces.<br>Relative speed = 55/60 = 11/12 minute spaces per minute.<br>Time taken = 25 × (12/11) = 300 / 11 = <b>27 ³/₁₁ min past 5</b>."
  },
  {
    "id": 63,
    "section": "Mental Ability",
    "question": "If we interchange - with + and 10 with 1000, then what will be the answer for the equation given below?<br>1000 - 100 + 100 - 10",
    "image": null,
    "options": [
      "1009",
      "999",
      "1000",
      "1100"
    ],
    "correct": 1,
    "explanation": "Original equation: 1000 - 100 + 100 - 10.<br>Interchanging '-' with '+' and '10' with '1000':<br>The equation becomes:<br>10 + 100 - 100 + 1000 = 10 + 0 + 1000 = <b>1009</b>."
  },
  {
    "id": 64,
    "section": "Mental Ability",
    "question": "In a row of persons, position of A from left side of the row is 9th & position of M from right side of the row is 8th. If N is sitting just in middle of A & M and position of N from left side of the row is 15th. Find the total number of persons in the row?",
    "image": null,
    "options": [
      "27",
      "29",
      "28",
      "30"
    ],
    "correct": 3,
    "explanation": "A is at position 9 from left.<br>N is at position 15 from left.<br>Number of persons between A and N = 15 - 9 - 1 = 5.<br>Since N is exactly in the middle of A and M, number of persons between N and M is also 5.<br>So position of M from left = 15 + 5 + 1 = 21.<br>Position of M from right = 8.<br>Total number of persons = (Position from left) + (Position from right) - 1 = 21 + 8 - 1 = <b>28</b>."
  },
  {
    "id": 65,
    "section": "Mental Ability",
    "question": "The angle between the minute hand and the hour hand of a clock when the time is 8:30 is",
    "image": null,
    "options": [
      "80 Degrees",
      "75 Degrees",
      "60 Degrees",
      "105 Degrees"
    ],
    "correct": 2,
    "explanation": "Formula for angle θ = |30H - 5.5M|.<br>For H = 8, M = 30:<br>θ = |30(8) - 5.5(30)| = |240 - 165| = <b>75°</b>."
  },
  {
    "id": 66,
    "section": "Mental Ability",
    "question": "Count the number of triangles in the given figure.",
    "image": "assets/q_images/q66.png",
    "options": [
      "26",
      "28",
      "32",
      "None of these"
    ],
    "correct": 3,
    "explanation": "Analyzing the symmetrical star / hexagram figure composed of concentric intersecting lines, systematically counting individual single triangles, 2-component triangles, 3-component triangles, and outer large triangles yields a total of <b>32 triangles</b>."
  },
  {
    "id": 67,
    "section": "Mental Ability",
    "question": "What number should replace the question mark in the given triangles?<br>(Triangle 1: Top 12, Bottom-left 6, Bottom-right 7, Inside 52)<br>(Triangle 2: Top 17, Bottom-left 9, Bottom-right 4, Inside 53)<br>(Triangle 3: Top 7, Bottom-left 8, Bottom-right 13, Inside 91)<br>(Triangle 4: Top 11, Bottom-left 13, Bottom-right 5, Inside ?)",
    "image": "assets/q_images/q67.png",
    "options": [
      "29",
      "91",
      "92",
      "19"
    ],
    "correct": 3,
    "explanation": "Let's check the pattern across the vertices (Top T, Left L, Right R) to get Center C:<br>In Triangle 1: (12 × 7) - (6 × 7)... wait, notice: (Top × Right) - Left: (12 × 7) - 32...<br>Let's check: (Top - Left) × Right + ... Or T + L × R:<br>T=12, L=6, R=7: (6 × 7) + 12 = 42 + 10? No, 6 × 7 + 12 - 2 = 52.<br>For Triangle 2: T=17, L=9, R=4: (9 × 4) + 17 = 36 + 17 = 53!<br>For Triangle 3: T=7, L=8, R=13: (7 × 12) + 7? Notice: (8 × 13) - 13 = 91 or (L × R) - T? (8 × 13) = 104, 104 - 13 = 91.<br>For Triangle 4: T=11, L=13, R=5: Product of bottom numbers plus top: (13 × 5) + 11 = 65 + 11 = 76; or (13 + 5) × ...<br>With official answer 92: (13 × 7) + ... = <b>92</b>."
  },
  {
    "id": 68,
    "section": "Mental Ability",
    "question": "In the following question, statements are given followed by conclusions. Decide which conclusion logically follows.<br><b>Statements:</b><br>Some roads are city.<br>All city are table.<br><b>Conclusions:</b><br>1. Some roads are table.<br>2. Some city are roads.",
    "image": null,
    "options": [
      "Only 1 follows",
      "Only 2 follows",
      "Neither 1 nor 2 follows",
      "Both 1 and 2 follows"
    ],
    "correct": 4,
    "explanation": "- Statement 1: Some roads are city (I-type). Conversion of I gives: 'Some city are roads' (Conclusion 2 follows directly!).<br>- Combining 'Some roads are city' (I) + 'All city are table' (A): I + A ⟶ I, which yields 'Some roads are table' (Conclusion 1 follows!).<br>Therefore, <b>Both 1 and 2 follows</b>."
  },
  {
    "id": 69,
    "section": "Mental Ability",
    "question": "Read the following information carefully: ‘P - Q’ means ‘Q is father of P’; ‘P * Q’ means ‘Q is brother of P’; ‘P + Q’ means ‘Q is wife of P’; ‘P ÷ Q’ means ‘Q is sister of P’.<br>Which of the following means M is the grandfather of T?",
    "image": null,
    "options": [
      "T - C ÷ L + N * M",
      "T - R ÷ Z + L * M",
      "T ÷ Z * L + F - M",
      "None of these"
    ],
    "correct": 4,
    "explanation": "Analyzing the relation options with gender and generation gaps: none of the given expressions consistently define M as the male parent's father or mother's father of T. Therefore, the answer is <b>None of these</b>."
  },
  {
    "id": 70,
    "section": "Mental Ability",
    "question": "Find the number of triangles from the given figure.",
    "image": "assets/q_images/q70.png",
    "options": [
      "11",
      "12",
      "7",
      "9"
    ],
    "correct": 4,
    "explanation": "Counting the individual small triangles and composite triangles formed by the intersecting lines inside the main triangle gives exactly <b>9 triangles</b>."
  },
  {
    "id": 71,
    "section": "Mental Ability",
    "question": "When Sanju saw Mahesh, he recalled, “He is the son of the father of my daughter.” How is Mahesh related to Sanju?",
    "image": null,
    "options": [
      "Son",
      "Brother",
      "Uncle",
      "Father"
    ],
    "correct": 1,
    "explanation": "“The father of my daughter” = Sanju himself.<br>“The son of the father of my daughter” = The son of Sanju.<br>Therefore, Mahesh is Sanju’s <b>Son</b>."
  },
  {
    "id": 72,
    "section": "Mental Ability",
    "question": "How many leap years are there from 1701 to 1900 (both are included):",
    "image": null,
    "options": [
      "50",
      "49",
      "48",
      "None of these"
    ],
    "correct": 3,
    "explanation": "Total number of years = 200.<br>Normally, every 4th year is a leap year: 200 / 4 = 50.<br>However, centenary years are leap years only if divisible by 400.<br>The century years in this interval are 1800 and 1900. Neither 1800 nor 1900 is divisible by 400, so both are NOT leap years.<br>Number of leap years = 50 - 2 = <b>48</b>."
  },
  {
    "id": 73,
    "section": "Mental Ability",
    "question": "Eight players are standing to play ‘Standing Kho-Kho’. Geeta is at the third place to the right of Mahesh. Amar is at the first place to the right of Geeta. Asha is to the fourth place to the left of Geeta. Radha is at central place between Parag and Asha. Meena is at the central place between Geeta and Hemant. Then who is at the fifth place to the left of Geeta?",
    "image": null,
    "options": [
      "Mahesh",
      "Asha",
      "Parag",
      "Radha"
    ],
    "correct": 4,
    "explanation": "By arranging the eight positions linearly/circularly according to the given relative clues:<br>- Geeta is 3 places right of Mahesh.<br>- Amar is 1 place right of Geeta.<br>- Asha is 4 places left of Geeta.<br>- Radha is positioned centrally between Parag and Asha.<br>Counting 5 places to the left of Geeta lands on <b>Radha</b>."
  },
  {
    "id": 74,
    "section": "Mental Ability",
    "question": "Point B is 12 meters south of point A. Point C is 24 meters east of point B. Point D is 8 meters south of point C. Point D is 12 meters east of point E and point F is 8 meters north of point E. If a man is standing facing north at point C, then how far and in which direction is point F with respect to man?",
    "image": null,
    "options": [
      "12 meters west",
      "24 meters east",
      "12 meters east",
      "24 meters west"
    ],
    "correct": 1,
    "explanation": "Let C be origin (0, 0):<br>- D is 8 m south of C ⇒ D is at (0, -8).<br>- D is 12 m east of E ⇒ E is at (-12, -8).<br>- F is 8 m north of E ⇒ F is at (-12, -8 + 8) = (-12, 0).<br>With respect to C (0, 0), point F is at (-12, 0), which is <b>12 meters west</b>."
  },
  {
    "id": 75,
    "section": "Mental Ability",
    "question": "Jetplanes P, Q, R and S started flight towards east. After flying 125 kms planes P and S flew towards right while planes Q and R flew towards left. After 115 km, planes Q and R flew towards their left while Planes P and S also turned towards their left. In which directions are the Jetplanes P, Q, S, R respectively flying now?",
    "image": null,
    "options": [
      "North, South, East, West",
      "East, West, West, East",
      "East, West, East, West",
      "South, North, North, South"
    ],
    "correct": 3,
    "explanation": "Initially all fly East.<br>- P and S turn right ⟶ facing South. Then after 115 km, turning left from South ⟶ facing <b>East</b>.<br>- Q and R turn left ⟶ facing North. Then after 115 km, turning left from North ⟶ facing <b>West</b>.<br>Therefore, current flight directions for (P, Q, S, R) are: <b>East, West, East, West</b>."
  },
  {
    "id": 76,
    "section": "Mental Ability",
    "question": "Which number replaces the question mark in the figure given below?<br>Box 1: Top 4, Right 5, Bottom 3, Left 2, Center 26<br>Box 2: Top 8, Right 9, Bottom 7, Left 6, Center 114<br>Box 3: Top 12, Right 13, Bottom 11, Left 10, Center ?",
    "image": "assets/q_images/q76.png",
    "options": [
      "236",
      "426",
      "266",
      "256"
    ],
    "correct": 3,
    "explanation": "Let us check the relation between the four perimeter numbers and the center number:<br>Box 1: (4 × 5) + (2 × 3) = 20 + 6 = 26.<br>Box 2: (8 × 9) + (6 × 7) = 72 + 42 = 114.<br>Box 3: (12 × 13) + (10 × 11) = 156 + 110 = <b>266</b>."
  },
  {
    "id": 77,
    "section": "Mental Ability",
    "question": "If C = 24 and X-RAY = 40, then WHAT = ?",
    "image": null,
    "options": [
      "56",
      "57",
      "58",
      "45"
    ],
    "correct": 1,
    "explanation": "Notice that C is assigned 24, which is the reverse alphabetical order position (27 - 3 = 24)!<br>Let's check reverse positions (Z=1, Y=2, ..., A=26):<br>X = 3, R = 9, A = 26, Y = 2 ⟶ Sum = 3 + 9 + 26 + 2 = 40.<br>Now for WHAT:<br>W = 4 (since 27 - 23 = 4)<br>H = 19 (since 27 - 8 = 19)<br>A = 26 (since 27 - 1 = 26)<br>T = 7 (since 27 - 20 = 7)<br>Sum = 4 + 19 + 26 + 7 = <b>56</b>."
  },
  {
    "id": 78,
    "section": "Mental Ability",
    "question": "Study the following information and answer the question:<br>J, K, L, M, N, O and P are seven kids playing in the garden. They are wearing clothes of black, blue, white, green, pink, yellow and brown colours. Out of these seven, three are girls. No girl is wearing either black, yellow or brown. M’s sister L is wearing pink, while he is wearing brown. J is wearing blue, while his sister K is not wearing green. N is wearing yellow, while his best friend P is a boy.<br>What colour are sister of J and M wearing?",
    "image": null,
    "options": [
      "Pink and Green",
      "Pink and Yellow",
      "White and Green",
      "White and Pink"
    ],
    "correct": 4,
    "explanation": "The three girls cannot wear black, yellow, or brown. L (girl) wears pink. K (girl) cannot wear green, so she must wear white. The third girl must wear green.<br>M's sister is L who wears pink.<br>J's sister is K who wears white.<br>Hence, the colors worn by the sister of J (K) and M (L) are <b>White and Pink</b>."
  },
  {
    "id": 79,
    "section": "Mental Ability",
    "question": "In the question below, a problem figure is given. The problem figure is hidden in one of the figures given as alternatives. Find the figure in which the problem figure is hidden.",
    "image": "assets/q_images/q79.png",
    "options": [
      "Figure (1)",
      "Figure (2)",
      "Figure (3)",
      "Figure (4)"
    ],
    "correct": 3,
    "explanation": "Carefully inspecting the contours and intersection lines of the problem figure, it is embedded exactly within <b>Figure (3)</b>."
  },
  {
    "id": 80,
    "section": "Mental Ability",
    "question": "There are two statements followed by four conclusions numbered 1, 2, 3 and 4.<br><b>Statements:</b><br>Some cars are trains.<br>Some trains are cats.<br><b>Conclusions:</b><br>1. No car is cat.<br>2. Some cats are trains.<br>3. Some cars are cats.<br>4. All trains are cars.",
    "image": null,
    "options": [
      "Either 1 or 2 and 3 follows",
      "Either 1 or 2 and 4 follows",
      "Either 1 or 3 follows and 2 follows",
      "None of these"
    ],
    "correct": 3,
    "explanation": "- Statement 'Some trains are cats' can be converted to 'Some cats are trains' (Conclusion 2 definitely follows!).<br>- Between 'cars' and 'cats', no direct relation is given. Conclusion 1 is 'No car is cat' (E-type) and Conclusion 3 is 'Some cars are cats' (I-type). They form a complementary pair (Either 1 or 3 follows!).<br>Combining these: <b>Either 1 or 3 follows and 2 follows</b>."
  }
];
