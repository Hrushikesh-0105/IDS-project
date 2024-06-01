const questions={
    Mathematics:{
        easy:{
            time:5,
            1:{
                q:"What is the value of 7 multiplied 8 ?",
                1:"A) 54",
                2:"B) 56",
                3:"C) 58",
                4:"D) 60",
                ans:2
            },
            2:{
                q:"What is 3/4+1/4 ?",
                1:"A) 1/4",
                2:"B) 1",
                3:"C) 1/2",
                4:"D) 3/2",
                ans:2
            },
            3:{
                q:"What is the perimeter of a rectangle with length 5 cm and width 3 cm?",
                1:"A) 15",
                2:"B) 18",
                3:"C) 16",
                4:"D) 20",
                ans:3
            },
            4:{
                q:"If a number is divided by 2 and then 3 is subtracted from the result, the final answer is 5. What is the number?",
                1:"A) 16",
                2:"B) 14",
                3:"C) 10",
                4:"D) 20",
                ans:1
            },
            5:{
                q:"What is the next number in the sequence: 2, 4, 6, 8, ...?",
                1:"A) 2",
                2:"B) 4",
                3:"C) 6",
                4:"D) 10",
                ans:4
            },
        },
        med:{
            time:10,
            1: {
                q: "Solve for x in the equation: 2x^2 + 5x - 3 = 0",
                1: "A) x = -3",
                2: "B) x = -1.5",
                3: "C) x = 1",
                4: "D) x = 0.5",
                ans: 3
            },
            2: {
                q: "The area of a square field is 144 square meters. What is the length of each side of the square?",
                1: "A) 8 meters",
                2: "B) 10 meters",
                3: "C) 12 meters",
                4: "D) 14 meters",
                ans: 3
            },
            3: {
                q: "A car is accelerating from rest at a constant rate of 4 m/s^2. How long will it take for the car to reach a speed of 20 m/s?",
                1: "A) 4 seconds",
                2: "B) 5 seconds",
                3: "C) 6 seconds",
                4: "D) 8 seconds",
                ans: 2
            },
            4: {
                q: "The product of two consecutive integers is 132. What are the integers?",
                1: "A) 11, 12",
                2: "B) 10, 11",
                3: "C) 12, 13",
                4: "D) 13, 14",
                ans: 1
            },
            5: {
                q: "A rectangular swimming pool has a length that is 6 meters more than its width. If the area of the pool is 210 square meters, what are the dimensions of the pool?",
                1: "A) 10 meters by 16 meters",
                2: "B) 12 meters by 18 meters",
                3: "C) 14 meters by 20 meters",
                4: "D) 16 meters by 22 meters",
                ans: 2
            }
        },        
        hard:{
            time:15,
            1: {
                q: "Find the derivative of the function f(x) = 3x^4 - 8x^2 + 2x - 5.",
                1: "A) f'(x) = 12x^3 - 16x + 2",
                2: "B) f'(x) = 12x^3 - 16x - 2",
                3: "C) f'(x) = 12x^3 - 16x - 1",
                4: "D) f'(x) = 12x^3 - 8x + 2",
                ans: 1
            },
            2: {
                q: "Evaluate the integral ∫(2x^3 + 5x^2 - 3x + 4) dx.",
                1: "A) 1/2x^4 + 5/3x^3 - 3/2x^2 + 4x + C",
                2: "B) 1/2x^4 + 5/3x^3 - 3/2x^2 + 4x^2 + C",
                3: "C) 1/2x^4 + 5/3x^3 - 3/2x^2 + 4x^3 + C",
                4: "D) 1/2x^4 + 5/3x^3 - 3/2x^2 + 4x^4 + C",
                ans: 1
            },
            3: {
                q: "If f(x) = √(3x + 1), find f'(x).",
                1: "A) f'(x) = 3/2√(3x + 1)",
                2: "B) f'(x) = 1/2√(3x + 1)",
                3: "C) f'(x) = 2√(3x + 1)",
                4: "D) f'(x) = 1/√(3x + 1)",
                ans: 2
            },
            4: {
                q: "Evaluate the integral ∫(e^x + 1/x) dx.",
                1: "A) e^x + ln|x| + C",
                2: "B) e^x + ln(x) + C",
                3: "C) e^x + 1/x + C",
                4: "D) e^x + ln(x) + ln|x| + C",
                ans: 2
            },
            5: {
                q: "Find the derivative of the function f(x) = sin(x^2) + cos(x).",
                1: "A) f'(x) = 2x cos(x^2) - sin(x)",
                2: "B) f'(x) = 2x cos(x^2) + sin(x)",
                3: "C) f'(x) = 2x sin(x^2) - cos(x)",
                4: "D) f'(x) = 2x sin(x^2) + cos(x)",
                ans: 1
            }
        }  
    },
    Physics:{
        easy:{
            time:5,
            1: {
                q: "What is the SI unit of force?",
                1: "A) Newton",
                2: "B) Joule",
                3: "C) Watt",
                4: "D) Pascal",
                ans: 1
            },
            2: {
                q: "Which of the following is an example of a scalar quantity?",
                1: "A) Velocity",
                2: "B) Force",
                3: "C) Mass",
                4: "D) Acceleration",
                ans: 3
            },
            3: {
                q: "What is the acceleration due to gravity near the surface of the Earth?",
                1: "A) 9.8 m/s^2",
                2: "B) 6.3 m/s^2",
                3: "C) 2.5 m/s^2",
                4: "D) 5.2 m/s^2",
                ans: 1
            },
            4: {
                q: "Which of the following statements is true about the conservation of energy?",
                1: "A) Energy can be created but not destroyed",
                2: "B) Energy can be destroyed but not created",
                3: "C) Energy cannot be created or destroyed",
                4: "D) Energy can be both created and destroyed",
                ans: 3
            },
            5: {
                q: "What is the formula for calculating kinetic energy?",
                1: "A) KE = mv^2",
                2: "B) KE = 1/2 mv^2",
                3: "C) KE = mv",
                4: "D) KE = m/v^2",
                ans: 2
            }
        },
        med:{
            time:10,
            1: {
                q: "A ball is thrown vertically upward with an initial velocity of 20 m/s. What is its velocity when it reaches its highest point?",
                1: "A) 20 m/s",
                2: "B) 10 m/s",
                3: "C) 0 m/s",
                4: "D) -20 m/s",
                ans: 3
            },
            2: {
                q: "A car travels at a constant speed of 20 m/s for 40 seconds. How far does it travel?",
                1: "A) 800 meters",
                2: "B) 600 meters",
                3: "C) 400 meters",
                4: "D) 200 meters",
                ans: 1
            },
            3: {
                q: "What is the SI unit of power?",
                1: "A) Watt",
                2: "B) Joule",
                3: "C) Newton",
                4: "D) Pascal",
                ans: 1
            },
            4: {
                q: "A block of mass 5 kg is placed on a horizontal surface. If a force of 20 N is applied to it, what is its acceleration?",
                1: "A) 2 m/s^2",
                2: "B) 4 m/s^2",
                3: "C) 6 m/s^2",
                4: "D) 8 m/s^2",
                ans: 2
            },
            5: {
                q: "What is the formula for calculating gravitational potential energy?",
                1: "A) PE = mgh",
                2: "B) PE = 1/2 mv^2",
                3: "C) PE = mg",
                4: "D) PE = kx",
                ans: 1
            }
        },
        hard:{
            time:15,
            1: {
                q: "In a double-slit experiment, what property of particles exhibits wave-like behavior?",
                1: "A) Mass",
                2: "B) Charge",
                3: "C) Spin",
                4: "D) Probability amplitude",
                ans: 4
            },
            2: {
                q: "What is the expectation value of position for a particle in a one-dimensional infinite potential well at its ground state?",
                1: "A) 0",
                2: "B) λ/4",
                3: "C) λ/2",
                4: "D) λ",
                ans: 3
            },
            3: {
                q: "In the photoelectric effect, increasing the intensity of light leads to an increase in which of the following?",
                1: "A) Energy of emitted electrons",
                2: "B) Number of emitted electrons",
                3: "C) Work function",
                4: "D) Threshold frequency",
                ans: 2
            },
            4: {
                q: "What is the uncertainty principle in quantum mechanics?",
                1: "A) It states that the position and momentum of a particle cannot both be precisely determined simultaneously.",
                2: "B) It states that the energy and time of a particle cannot both be precisely determined simultaneously.",
                3: "C) It states that the speed and direction of a particle cannot both be precisely determined simultaneously.",
                4: "D) It states that the spin and charge of a particle cannot both be precisely determined simultaneously.",
                ans: 1
            },
            5: {
                q: "Which of the following particles is a boson?",
                1: "A) Electron",
                2: "B) Proton",
                3: "C) Photon",
                4: "D) Neutron",
                ans: 3
            }
        }

    },
    Electrical:{
        easy:{
            time:5,
            1: {
                q: "What is the SI unit of electric charge?",
                1: "A) Volt",
                2: "B) Ohm",
                3: "C) Coulomb",
                4: "D) Ampere",
                ans: 3
            },
            2: {
                q: "What is the relationship between voltage, current, and resistance in an electrical circuit?",
                1: "A) Ohm's Law",
                2: "B) Faraday's Law",
                3: "C) Gauss's Law",
                4: "D) Coulomb's Law",
                ans: 1
            },
            3: {
                q: "What is the function of a resistor in an electrical circuit?",
                1: "A) To store electrical energy",
                2: "B) To amplify electrical signals",
                3: "C) To regulate current flow",
                4: "D) To convert electrical energy to mechanical energy",
                ans: 3
            },
            4: {
                q: "What is the formula for calculating power in an electrical circuit?",
                1: "A) P = IV",
                2: "B) P = IR",
                3: "C) P = V/R",
                4: "D) P = V/I",
                ans: 4
            },
            5: {
                q: "Which material is commonly used as an insulator in electrical wires?",
                1: "A) Copper",
                2: "B) Aluminum",
                3: "C) Rubber",
                4: "D) Silver",
                ans: 3
            }        
        },
        med:{
            time:10,
            1: {
                q: "A circuit has a resistor with resistance 50 ohms and a current of 2 amperes passing through it. What is the voltage across the resistor?",
                1: "A) 25 volts",
                2: "B) 50 volts",
                3: "C) 100 volts",
                4: "D) 200 volts",
                ans: 2
            },
            2: {
                q: "A capacitor has a capacitance of 10 microfarads and is connected to a voltage source of 100 volts. What is the energy stored in the capacitor?",
                1: "A) 10 joules",
                2: "B) 50 joules",
                3: "C) 100 joules",
                4: "D) 500 joules",
                ans: 3
            },
            3: {
                q: "A circuit consists of two resistors connected in series. The first resistor has a resistance of 30 ohms, and the second resistor has a resistance of 20 ohms. What is the total resistance of the circuit?",
                1: "A) 50 ohms",
                2: "B) 60 ohms",
                3: "C) 70 ohms",
                4: "D) 80 ohms",
                ans: 1
            },
            4: {
                q: "A parallel circuit consists of three resistors with resistances of 10 ohms, 20 ohms, and 30 ohms respectively. What is the total resistance of the circuit?",
                1: "A) 5 ohms",
                2: "B) 10 ohms",
                3: "C) 15 ohms",
                4: "D) 60 ohms",
                ans: 3
            },
            5: {
                q: "An electrical circuit has a power of 500 watts and a voltage of 100 volts. What is the current flowing through the circuit?",
                1: "A) 2.5 amperes",
                2: "B) 5 amperes",
                3: "C) 10 amperes",
                4: "D) 20 amperes",
                ans: 2
            }

        },
        hard:{
            time:15,
            1: {
                q: "A transformer has 1000 turns in its primary coil and 200 turns in its secondary coil. If the input voltage is 120 volts, what is the output voltage?",
                1: "A) 20 volts",
                2: "B) 24 volts",
                3: "C) 240 volts",
                4: "D) 600 volts",
                ans: 3
            },
            2: {
                q: "In a DC circuit, a resistor with a resistance of 10 ohms is connected in series with a capacitor with a capacitance of 0.1 farads. What is the time constant of the circuit?",
                1: "A) 1 second",
                2: "B) 10 seconds",
                3: "C) 100 seconds",
                4: "D) 1000 seconds",
                ans: 1
            },
            3: {
                q: "In an AC circuit, the impedance consists of a resistor with a resistance of 20 ohms and an inductor with an inductance of 0.1 henrys. What is the total impedance of the circuit at a frequency of 50 Hz?",
                1: "A) 10 ohms",
                2: "B) 22.36 ohms",
                3: "C) 24.49 ohms",
                4: "D) 30 ohms",
                ans: 3
            },
            4: {
                q: "A circuit contains a resistor with a resistance of 50 ohms and a capacitor with a capacitance of 0.01 farads. If the frequency of the AC source is 1000 Hz, what is the phase difference between the voltage across the resistor and the voltage across the capacitor?",
                1: "A) 0 degrees",
                2: "B) 45 degrees",
                3: "C) 90 degrees",
                4: "D) 180 degrees",
                ans: 3
            },
            5: {
                q: "A step-up transformer has a turns ratio of 1:10. If the primary voltage is 120 volts, what is the secondary voltage?",
                1: "A) 12 volts",
                2: "B) 120 volts",
                3: "C) 240 volts",
                4: "D) 1200 volts",
                ans: 4
            }
        }

    },
    Mechanical:{
        easy:{
            time:5,
            1: {
                q: "What is the SI unit of force?",
                1: "A) Newton",
                2: "B) Joule",
                3: "C) Watt",
                4: "D) Pascal",
                ans: 1
            },
            2: {
                q: "Which of the following is a scalar quantity?",
                1: "A) Velocity",
                2: "B) Force",
                3: "C) Mass",
                4: "D) Acceleration",
                ans: 3
            },
            3: {
                q: "What is the acceleration due to gravity near the surface of the Earth?",
                1: "A) 9.8 m/s^2",
                2: "B) 6.3 m/s^2",
                3: "C) 2.5 m/s^2",
                4: "D) 5.2 m/s^2",
                ans: 1
            },
            4: {
                q: "What is the formula for calculating kinetic energy?",
                1: "A) KE = mv^2",
                2: "B) KE = 1/2 mv^2",
                3: "C) KE = mv",
                4: "D) KE = m/v^2",
                ans: 2
            },
            5: {
                q: "Which of the following is an example of projectile motion?",
                1: "A) A ball rolling down a hill",
                2: "B) A pendulum swinging back and forth",
                3: "C) A rocket launching into space",
                4: "D) A stone thrown horizontally",
                ans: 4
            }
        },
        med:{
            time:10,
            1: {
                q: "A block is placed on an inclined plane with an angle of 30 degrees to the horizontal. If the weight of the block is 50 N and the coefficient of friction between the block and the plane is 0.3, what is the force of friction acting on the block?",
                1: "A) 15 N",
                2: "B) 25 N",
                3: "C) 30 N",
                4: "D) 35 N",
                ans: 3
            },
            2: {
                q: "A car is traveling at a constant speed of 20 m/s around a circular track with a radius of 50 meters. If the coefficient of friction between the tires and the road is 0.2, what is the maximum speed the car can maintain without sliding off the track?",
                1: "A) 16 m/s",
                2: "B) 18 m/s",
                3: "C) 20 m/s",
                4: "D) 22 m/s",
                ans: 1
            },
            3: {
                q: "A person pushes a box horizontally across a rough surface with a force of 50 N. If the coefficient of friction between the box and the surface is 0.4 and the mass of the box is 20 kg, what is the acceleration of the box?",
                1: "A) 1 m/s^2",
                2: "B) 2 m/s^2",
                3: "C) 3 m/s^2",
                4: "D) None of the above",
                ans: 2
            },
            4: {
                q: "A book is placed on a table. If the coefficient of friction between the book and the table is 0.2, what is the magnitude of the frictional force exerted on the book?",
                1: "A) Equal to the weight of the book",
                2: "B) Greater than the weight of the book",
                3: "C) Lesser than the weight of the book",
                4: "D) Zero",
                ans: 1
            },
            5: {
                q: "A box is pushed across a horizontal surface with a force of 40 N. If the coefficient of friction between the box and the surface is 0.3 and the mass of the box is 10 kg, what is the acceleration of the box?",
                1: "A) 1 m/s^2",
                2: "B) 2 m/s^2",
                3: "C) 3 m/s^2",
                4: "D) 4 m/s^2",
                ans: 2
            }
        },
        hard:{
            time:15,
            1: {
                q: "A cable is supporting a 100 kg object by being connected to a wall and the ceiling, making angles of 45 degrees with the wall and 30 degrees with the ceiling respectively. What is the tension in the cable?",
                1: "A) 490 N",
                2: "B) 780 N",
                3: "C) 981 N",
                4: "D) 1131 N",
                ans: 3
            },
            2: {
                q: "A beam of length 5 meters is hinged at one end and free at the other. A force of 200 N is applied at the free end at an angle of 30 degrees to the beam. What is the moment about the hinge?",
                1: "A) 250 Nm",
                2: "B) 400 Nm",
                3: "C) 500 Nm",
                4: "D) 600 Nm",
                ans: 3
            },
            3: {
                q: "A uniform ladder of length 10 meters and weight 200 N leans against a smooth vertical wall making an angle of 60 degrees with the horizontal. Find the horizontal force exerted by the wall on the ladder.",
                1: "A) 100 N",
                2: "B) 173 N",
                3: "C) 200 N",
                4: "D) 346 N",
                ans: 2
            },
            4: {
                q: "A particle is acted upon by three forces in the XY plane: F1 = 50 N at 30 degrees, F2 = 60 N at 120 degrees, and F3 = 70 N at 240 degrees. What is the resultant force on the particle?",
                1: "A) 10 N",
                2: "B) 30 N",
                3: "C) 50 N",
                4: "D) 70 N",
                ans: 1
            },
            5: {
                q: "A square plate of side 2 meters is acted upon by forces of 10 N, 20 N, 30 N, and 40 N at the corners A, B, C, and D respectively, all acting outward and parallel to the plane of the plate. Determine the resultant moment about the center of the plate.",
                1: "A) 10 Nm",
                2: "B) 40 Nm",
                3: "C) 60 Nm",
                4: "D) 80 Nm",
                ans: 4
            }

        }

    },
    Biology:{
        easy:{
            time:5,
            1: {
                q: "Which of the following structures are found in a eukaryotic cell but not in a prokaryotic cell?",
                1: "A) Nucleus",
                2: "B) Mitochondria",
                3: "C) Golgi apparatus",
                4: "D) All of the above",
                ans: 4
            },
            2: {
                q: "Which of the following is the primary function of the xylem in vascular plants?",
                1: "A) Transport of sugars",
                2: "B) Transport of water and minerals",
                3: "C) Photosynthesis",
                4: "D) All of the above",
                ans: 2
            },
            3: {
                q: "Which enzyme is responsible for breaking down starches into sugars during digestion?",
                1: "A) Amylase",
                2: "B) Lipase",
                3: "C) Protease",
                4: "D) None of the above",
                ans: 1
            },
            4: {
                q: "Which part of the human brain is primarily responsible for regulating balance and coordination?",
                1: "A) Cerebrum",
                2: "B) Cerebellum",
                3: "C) Medulla oblongata",
                4: "D) None of the above",
                ans: 2
            },
            5: {
                q: "Which of the following is NOT a function of the liver?",
                1: "A) Detoxification of blood",
                2: "B) Production of bile",
                3: "C) Storage of glycogen",
                4: "D) Production of insulin",
                ans: 4
            }
        },
        med:{
            time:10,
            1: {
                q: "Which of the following is the main function of ribosomes in a cell?",
                1: "A) DNA replication",
                2: "B) Protein synthesis",
                3: "C) Lipid metabolism",
                4: "D) ATP production",
                ans: 2
            },
            2: {
                q: "Which organelle is responsible for packaging and modifying proteins in eukaryotic cells?",
                1: "A) Endoplasmic reticulum",
                2: "B) Lysosome",
                3: "C) Golgi apparatus",
                4: "D) Mitochondria",
                ans: 3
            },
            3: {
                q: "In genetics, what is the term used to describe the physical appearance resulting from a genotype?",
                1: "A) Allele",
                2: "B) Phenotype",
                3: "C) Genotype",
                4: "D) Chromosome",
                ans: 2
            },
            4: {
                q: "Which of the following processes is involved in the formation of gametes?",
                1: "A) Mitosis",
                2: "B) Meiosis",
                3: "C) Binary fission",
                4: "D) Budding",
                ans: 2
            },
            5: {
                q: "What type of macromolecule are enzymes typically classified as?",
                1: "A) Carbohydrates",
                2: "B) Lipids",
                3: "C) Proteins",
                4: "D) Nucleic acids",
                ans: 3
            }
        },
        hard:{
            time:15,
            1: {
                q: "Which of the following processes involves the removal of introns from a pre-mRNA transcript?",
                1: "A) Translation",
                2: "B) Splicing",
                3: "C) Transcription",
                4: "D) Replication",
                ans: 2
            },
            2: {
                q: "Which of the following is the primary reason for the higher energy yield of aerobic respiration compared to anaerobic respiration?",
                1: "A) The presence of oxygen allows for oxidative phosphorylation in the mitochondria.",
                2: "B) Anaerobic respiration involves more steps that consume energy.",
                3: "C) Aerobic respiration uses fewer substrates per glucose molecule.",
                4: "D) None of the above",
                ans: 1
            },
            3: {
                q: "In the context of the lac operon, what is the role of the lac repressor when lactose is absent?",
                1: "A) It activates the transcription of the lac genes.",
                2: "B) It binds to the operator to prevent transcription of the lac genes.",
                3: "C) It degrades the lac mRNA.",
                4: "D) It modifies the structure of lactose.",
                ans: 2
            },
            4: {
                q: "Which of the following statements best describes the function of telomerase?",
                1: "A) It adds repetitive nucleotide sequences to the ends of chromosomes to prevent shortening during replication.",
                2: "B) It repairs mismatched base pairs in DNA.",
                3: "C) It unwinds the DNA double helix during replication.",
                4: "D) It synthesizes RNA primers for DNA replication.",
                ans: 1
            },
            5: {
                q: "Which process describes the movement of genetic material between non-homologous chromosomes resulting in a new gene arrangement?",
                1: "A) Translocation",
                2: "B) Crossing over",
                3: "C) Independent assortment",
                4: "D) Segregation",
                ans: 1
            }
        }

    },
    Chemistry:{
        easy:{
            time:5,
            1: {
                q: "What is the chemical formula for water?",
                1: "A) H2O",
                2: "B) CO2",
                3: "C) H2O2",
                4: "D) O2",
                ans: 1
            },
            2: {
                q: "What is the chemical formula for table salt?",
                1: "A) NaCl",
                2: "B) KCl",
                3: "C) Na2CO3",
                4: "D) NaOH",
                ans: 1
            },
            3: {
                q: "Which subatomic particle carries a negative charge?",
                1: "A) Proton",
                2: "B) Neutron",
                3: "C) Electron",
                4: "D) Nucleus",
                ans: 3
            },
            4: {
                q: "What is the pH of a solution with a hydrogen ion concentration of 1 x 10^-9 M?",
                1: "A) 7",
                2: "B) 9",
                3: "C) 5",
                4: "D) 3",
                ans: 4
            },
            5: {
                q: "Which of the following elements is a noble gas?",
                1: "A) Oxygen",
                2: "B) Helium",
                3: "C) Nitrogen",
                4: "D) Carbon",
                ans: 2
            }
        },
        med:{
            time:10,
            1: {
                q: "What is the molarity of a solution prepared by dissolving 25 grams of sodium chloride (NaCl) in enough water to make 500 mL of solution?",
                1: "A) 0.25 M",
                2: "B) 0.5 M",
                3: "C) 1.0 M",
                4: "D) 2.0 M",
                ans: 2
            },
            2: {
                q: "If you have a 0.25 M solution of hydrochloric acid (HCl) and you need 500 mL of this solution, how many milliliters of pure HCl (12 M) would you need to dilute with water to prepare it?",
                1: "A) 5.2 mL",
                2: "B) 7.6 mL",
                3: "C) 10.4 mL",
                4: "D) 15.2 mL",
                ans: 3
            },
            3: {
                q: "What volume will 2 moles of nitrogen gas (N2) occupy at a pressure of 3 atm and a temperature of 300 K, according to the ideal gas law?",
                1: "A) 50.4 L",
                2: "B) 56.7 L",
                3: "C) 60.8 L",
                4: "D) 64.2 L",
                ans: 1
            },
            4: {
                q: "A solution is prepared by dissolving 5 grams of glucose (C6H12O6) in enough water to make 250 mL of solution. What is the molarity of the solution?",
                1: "A) 0.5 M",
                2: "B) 1.0 M",
                3: "C) 2.0 M",
                4: "D) 4.0 M",
                ans: 1
            },
            5: {
                q: "A gas occupies a volume of 4.0 L at 27°C. What will be its volume at 127°C if the pressure and amount of gas remain constant?",
                1: "A) 3.72 L",
                2: "B) 4.14 L",
                3: "C) 4.36 L",
                4: "D) 4.68 L",
                ans: 3
            }
        },
        hard:{
            time:15,
            1: {
                q: "What is the pH of a 0.01 M hydrochloric acid (HCl) solution?",
                1: "A) 1",
                2: "B) 2",
                3: "C) 3",
                4: "D) 4",
                ans: 2
            },
            2: {
                q: "Calculate the boiling point elevation of a solution containing 0.5 mol of glucose (C6H12O6) dissolved in 500 g of water. (Kb for water = 0.512 °C/mol)",
                1: "A) 0.128 °C",
                2: "B) 0.256 °C",
                3: "C) 0.512 °C",
                4: "D) 1.024 °C",
                ans: 2
            },
            3: {
                q: "What is the IUPAC name for CH3CH2CH(CH3)CH2OH?",
                1: "A) 2-Butanol",
                2: "B) 2-Methylbutan-2-ol",
                3: "C) 2-Pentanol",
                4: "D) 2-Methylpentan-2-ol",
                ans: 4
            },
            4: {
                q: "Calculate the mass percent composition of nitrogen in ammonium nitrate (NH4NO3).",
                1: "A) 20.8%",
                2: "B) 35.0%",
                3: "C) 45.6%",
                4: "D) 50.0%",
                ans: 2
            },
            5: {
                q: "How many stereoisomers are possible for 2,3-dibromobutane (C4H8Br2)?",
                1: "A) 1",
                2: "B) 2",
                3: "C) 3",
                4: "D) 4",
                ans: 3
            }
        }
    },
    History:{
        easy:{
            time:5,
            1: {
                q: "Who was the first Prime Minister of India?",
                1: "A) Jawaharlal Nehru",
                2: "B) Mahatma Gandhi",
                3: "C) Sardar Vallabhbhai Patel",
                4: "D) Indira Gandhi",
                ans: 1
            },
            2: {
                q: "When did India gain independence from British rule?",
                1: "A) 1945",
                2: "B) 1947",
                3: "C) 1950",
                4: "D) 1962",
                ans: 2
            },
            3: {
                q: "Who is known as the Father of the Indian Constitution?",
                1: "A) Mahatma Gandhi",
                2: "B) Jawaharlal Nehru",
                3: "C) B.R. Ambedkar",
                4: "D) Sardar Vallabhbhai Patel",
                ans: 3
            },
            4: {
                q: "Where is the Taj Mahal located?",
                1: "A) Delhi",
                2: "B) Agra",
                3: "C) Jaipur",
                4: "D) Mumbai",
                ans: 2
            },
            5: {
                q: "Who was the leader of the Indian independence movement known for his non-violent resistance?",
                1: "A) Bhagat Singh",
                2: "B) Subhas Chandra Bose",
                3: "C) Mahatma Gandhi",
                4: "D) Jawaharlal Nehru",
                ans: 3
            }
        },
        med:{
            time:10,
            1: {
                q: "Who was the first President of the United States?",
                1: "A) Thomas Jefferson",
                2: "B) George Washington",
                3: "C) Abraham Lincoln",
                4: "D) John Adams",
                ans: 2
            },
            2: {
                q: "Who was the first Governor-General of independent India?",
                1: "A) Lord Mountbatten",
                2: "B) Jawaharlal Nehru",
                3: "C) C. Rajagopalachari",
                4: "D) Sardar Vallabhbhai Patel",
                ans: 1
            },
            3: {
                q: "What year did India become a republic?",
                1: "A) 1947",
                2: "B) 1948",
                3: "C) 1950",
                4: "D) 1952",
                ans: 3
            },
            4: {
                q: "Who was the first Prime Minister of the United Kingdom?",
                1: "A) Winston Churchill",
                2: "B) Clement Attlee",
                3: "C) Robert Walpole",
                4: "D) William Pitt the Younger",
                ans: 3
            },
            5: {
                q: "What event marked the beginning of World War II?",
                1: "A) The Treaty of Versailles",
                2: "B) The Invasion of Poland",
                3: "C) The Russian Revolution",
                4: "D) The Battle of Stalingrad",
                ans: 2
            }
        },
        hard:{
            time:15,
            1: {
                q: "Who was the founder of the Maurya Empire in ancient India?",
                1: "A) Chandragupta Maurya",
                2: "B) Ashoka the Great",
                3: "C) Bindusara",
                4: "D) Samrat Ashok",
                ans: 1
            },
            2: {
                q: "Which emperor ruled the largest empire in history, covering approximately 22% of the world's land area?",
                1: "A) Genghis Khan",
                2: "B) Alexander the Great",
                3: "C) Napoleon Bonaparte",
                4: "D) Cyrus the Great",
                ans: 1
            },
            3: {
                q: "Who was the first female Prime Minister of India?",
                1: "A) Sonia Gandhi",
                2: "B) Indira Gandhi",
                3: "C) Sarojini Naidu",
                4: "D) Margaret Thatcher",
                ans: 2
            },
            4: {
                q: "What was the significance of the Battle of Plassey in Indian history?",
                1: "A) It marked the beginning of British rule in India.",
                2: "B) It led to the downfall of the Mughal Empire.",
                3: "C) It established the Maratha Confederacy.",
                4: "D) It resulted in the annexation of Punjab.",
                ans: 1
            },
            5: {
                q: "Who was the first African-American President of the United States?",
                1: "A) Barack Obama",
                2: "B) Martin Luther King Jr.",
                3: "C) Malcolm X",
                4: "D) Nelson Mandela",
                ans: 1
            }
        }

    },
    General_knowledge:{
        easy:{
            time:5,
            1: {
                q: "What is the capital city of France?",
                1: "A) London",
                2: "B) Paris",
                3: "C) Berlin",
                4: "D) Rome",
                ans: 2
            },
            2: {
                q: "Who wrote 'Romeo and Juliet'?",
                1: "A) William Shakespeare",
                2: "B) Charles Dickens",
                3: "C) Jane Austen",
                4: "D) Mark Twain",
                ans: 1
            },
            3: {
                q: "What is the chemical symbol for gold?",
                1: "A) Au",
                2: "B) Ag",
                3: "C) Fe",
                4: "D) Cu",
                ans: 1
            },
            4: {
                q: "Which planet is known as the 'Red Planet'?",
                1: "A) Venus",
                2: "B) Jupiter",
                3: "C) Mars",
                4: "D) Saturn",
                ans: 3
            },
            5: {
                q: "What is the tallest mountain in the world?",
                1: "A) Mount Everest",
                2: "B) K2",
                3: "C) Kangchenjunga",
                4: "D) Lhotse",
                ans: 1
            }
        },
        med:{
            time:10,
            1: {
                q: "Who painted the Mona Lisa?",
                1: "A) Leonardo da Vinci",
                2: "B) Vincent van Gogh",
                3: "C) Pablo Picasso",
                4: "D) Michelangelo",
                ans: 1
            },
            2: {
                q: "In which year did World War II end?",
                1: "A) 1943",
                2: "B) 1945",
                3: "C) 1947",
                4: "D) 1950",
                ans: 2
            },
            3: {
                q: "Who is known as the 'Father of Computers'?",
                1: "A) Bill Gates",
                2: "B) Steve Jobs",
                3: "C) Alan Turing",
                4: "D) Charles Babbage",
                ans: 4
            },
            4: {
                q: "What is the chemical formula for water?",
                1: "A) H2O2",
                2: "B) CO2",
                3: "C) H2O",
                4: "D) CH4",
                ans: 3
            },
            5: {
                q: "Who wrote 'To Kill a Mockingbird'?",
                1: "A) Harper Lee",
                2: "B) J.K. Rowling",
                3: "C) Ernest Hemingway",
                4: "D) F. Scott Fitzgerald",
                ans: 1
            }
        },
        hard:{
            time:15,
            1: {
                q: "Which element has the chemical symbol 'Fe'?",
                1: "A) Iron",
                2: "B) Gold",
                3: "C) Silver",
                4: "D) Lead",
                ans: 1
            },
            2: {
                q: "Who was the first woman to win a Nobel Prize?",
                1: "A) Marie Curie",
                2: "B) Mother Teresa",
                3: "C) Rosa Parks",
                4: "D) Ada Lovelace",
                ans: 1
            },
            3: {
                q: "What is the largest organ in the human body?",
                1: "A) Liver",
                2: "B) Skin",
                3: "C) Brain",
                4: "D) Heart",
                ans: 2
            },
            4: {
                q: "Who was the first man to step on the moon?",
                1: "A) Neil Armstrong",
                2: "B) Buzz Aldrin",
                3: "C) Yuri Gagarin",
                4: "D) Alan Shepard",
                ans: 1
            },
            5: {
                q: "What is the currency of Japan?",
                1: "A) Yen",
                2: "B) Yuan",
                3: "C) Won",
                4: "D) Dollar",
                ans:1
            }
        },
    },
    Space_and_Astronomy:{
        easy:{
            time:5,
            1: {
                q: "Which planet is known as the 'Red Planet'?",
                1: "A) Venus",
                2: "B) Jupiter",
                3: "C) Mars",
                4: "D) Saturn",
                ans: 3
            },
            
            2: {
                q: "What is the closest star to Earth?",
                1: "A) Proxima Centauri",
                2: "B) Sirius",
                3: "C) Alpha Centauri",
                4: "D) Betelgeuse",
                ans: 1
            },
            3: {
                q: "Which planet is known as the 'Giant of the Solar System'?",
                1: "A) Earth",
                2: "B) Jupiter",
                3: "C) Mars",
                4: "D) Saturn",
                ans: 2
            },
            4: {
                q: "What is the brightest object in the night sky?",
                1: "A) The Moon",
                2: "B) Venus",
                3: "C) Mars",
                4: "D) Jupiter",
                ans: 1
            },
            5: {
                q: "What is the name of the galaxy containing our solar system?",
                1: "A) Milky Way",
                2: "B) Andromeda",
                3: "C) Orion",
                4: "D) Sombrero",
                ans: 1
            }
        },
        med:{
            time:10,
            1: {
                q: "What is the term for a group of stars forming a recognizable pattern?",
                1: "A) Asterism",
                2: "B) Constellation",
                3: "C) Galaxy",
                4: "D) Nebula",
                ans: 2
            },
            2: {
                q: "What is the name of the largest moon of Saturn?",
                1: "A) Europa",
                2: "B) Titan",
                3: "C) Ganymede",
                4: "D) Triton",
                ans: 2
            },
            3: {
                q: "What is the name of the first artificial satellite launched into space?",
                1: "A) Sputnik 1",
                2: "B) Explorer 1",
                3: "C) Vanguard 1",
                4: "D) Telstar 1",
                ans: 1
            },
            4: {
                q: "Which planet is often referred to as the 'Morning Star' or 'Evening Star'?",
                1: "A) Mercury",
                2: "B) Venus",
                3: "C) Mars",
                4: "D) Jupiter",
                ans: 2
            },
            5: {
                q: "What is the name of the closest galaxy to the Milky Way?",
                1: "A) Andromeda",
                2: "B) Triangulum",
                3: "C) Centaurus A",
                4: "D) Bode's Galaxy",
                ans: 1
            }
        },
        hard:{
            time:15,
            1: {
                q: "What is the largest planet in the solar system?",
                1: "A) Earth",
                2: "B) Jupiter",
                3: "C) Saturn",
                4: "D) Neptune",
                ans: 2
            },
            2: {
                q: "What is the name of the phenomenon where light from a distant object is bent by the gravitational pull of a massive object between it and the observer?",
                1: "A) Gravitational lensing",
                2: "B) Stellar parallax",
                3: "C) Redshift",
                4: "D) Blue shift",
                ans: 1
            },
            3: {
                q: "What is the name of the largest volcano in the solar system, located on Mars?",
                1: "A) Olympus Mons",
                2: "B) Mauna Loa",
                3: "C) Mount Everest",
                4: "D) Mount Vesuvius",
                ans: 1
            },
            4: {
                q: "Which planet has the highest density among all the planets in the solar system?",
                1: "A) Earth",
                2: "B) Jupiter",
                3: "C) Saturn",
                4: "D) Mercury",
                ans: 4
            },
            5: {
                q: "What is the name of the region surrounding a black hole where the gravitational pull is so strong that not even light can escape?",
                1: "A) Event horizon",
                2: "B) Accretion disk",
                3: "C) Singularity",
                4: "D) Ergosphere",
                ans: 1
            }

        }

    }
}

console.log(JSON.stringify(questions));