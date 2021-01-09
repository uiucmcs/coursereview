var course_data = {
    "courses":
    [
        {
            "id": "aml",
            "code": "CS 498",
            "name": "Applied Machine Learning",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Artificial Intelligence"
            ]
        },
        {
            "id": "cph",
            "code": "CS 445",
            "name": "Computational Photography",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Artificial Intelligence",
                "Interactive Computing (Graphics/HCI)"
            ]
        },
        {
            "id": "dlh",
            "code": "CS 598",
            "name": "Deep Learning for Healthcare",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Artificial Intelligence",
                "Advanced Coursework"
            ]
        },
        {
            "id": "tis",
            "code": "CS 410",
            "name": "Text Information Systems",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Database & Information Systems"
            ]
        },
        {
            "id": "dbs",
            "code": "CS 411",
            "name": "Database Systems",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Database & Information Systems"
            ]
        },
        {
            "id": "idm",
            "code": "CS 412",
            "name": "Introduction to Data Mining",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Database & Information Systems"
            ]
        },
        {
            "id": "icg",
            "code": "CS 418",
            "name": "Interactive Computer Graphics",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Interactive Computing (Graphics/HCI)"
            ]
        },
        {
            "id": "dvz",
            "code": "CS 498",
            "name": "Data Visualization",
            "semester":
            [
                "summer"
            ],
            "category":
            [
                "Interactive Computing (Graphics/HCI)"
            ]
        },
        {
            "id": "svz",
            "code": "CS 519",
            "name": "Scientific Visualization",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Interactive Computing (Graphics/HCI)",
                "Advanced Coursework"
            ],
            "prerequisite":
            {
                "minimum": 0,
                "courses":
                {
                    "mandatory": [],
                    "optional":
                    [
                        "icg",
                        "dvz"
                    ]
                }
            }
        },
        {
            "id": "prp",
            "code": "CS 484",
            "name": "Parallel Programming",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Parallel Computing"
            ]
        },
        {
            "id": "plc",
            "code": "CS 421",
            "name": "Programming Languages and Compilers",
            "semester":
            [
                "summer"
            ],
            "category":
            [
                "Programming Languages & Software Engineering"
            ]
        },
        {
            "id": "swi",
            "code": "CS 427",
            "name": "Software Engineering I",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Programming Languages & Software Engineering"
            ]
        },
        {
            "id": "nma",
            "code": "CS 450",
            "name": "Numerical Analysis",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Scientific Computing"
            ]
        },
        {
            "id": "dst",
            "code": "CS 425",
            "name": "Distributed Systems",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Systems & Networking"
            ]
        },
        {
            "id": "cca",
            "code": "CS 498",
            "name": "Cloud Computing Applications",
            "semester":
            [
                "spring"
            ],
            "category":
            [
                "Systems & Networking"
            ]
        },
        {
            "id": "cnt",
            "code": "CS 498",
            "name": "Cloud Networking",
            "semester":
            [
                "fall"
            ],
            "category":
            [
                "Systems & Networking"
            ]
        },
        {
            "id": "iot",
            "code": "CS 498",
            "name": "Internet of Things",
            "semester": [
                "spring"
            ],
            "category": [
                "Systems & Networking"
            ]
        },
        {
            "id": "tpd",
            "code": "CS 513",
            "name": "Theory and Practice of Data Cleaning",
            "semester": [
                "summer"
            ],
            "category": [
                "Advanced Coursework"
            ]
        },
        {
            "id": "fdc",
            "code": "CS 598",
            "name": "Foundations of Data Curation",
            "semester": [
                "fall"
            ],
            "category": [
                "Advanced Coursework"
            ]
        },
        {
            "id": "psl",
            "code": "CS 598",
            "name": "Practical Statistical Learning",
            "semester": [
                "fall",
                "spring"
            ],
            "category": [
                "Advanced Coursework"
            ],
            "prerequisite": {
                "minimum": 1,
                "courses": {
                    "mandatory": [],
                    "optional": [
                        "tis",
                        "idm",
                        "mas",
                        "aml",
                        "cph",
                        "dlh"
                    ]
                }
            }
        },
        {
            "id": "adm",
            "code": "CS 598",
            "name": "Advanced Bayesian Modeling",
            "semester": [
                "spring"
            ],
            "category": [
                "Advanced Coursework"
            ]
        },
        {
            "id": "ccc",
            "code": "CS 598",
            "name": "Cloud Computing Capstone",
            "semester": [
                "summer"
            ],
            "category": [
                "Advanced Coursework"
            ],
            "prerequisite": {
                "minimum": 2,
                "courses": {
                    "mandatory": [
                        "cca"
                    ],
                    "optional": [
                        "dst",
                        "cnt",
                        "iot"
                    ]
                }
            }
        },
        {
            "id": "dmc",
            "code": "CS 598",
            "name": "Data Mining Capstone",
            "semester": [
                "summer"
            ],
            "category": [
                "Advanced Coursework"
            ],
            "prerequisite": {
                "minimum": 2,
                "courses": {
                    "mandatory": [
                        "tis",
                        "idm"
                    ],
                    "optional": []
                }
            }
        },
        {
            "id": "mas",
            "code": "STAT 420",
            "name": "Methods of Applied Statistics",
            "semester": [
                "summer"
            ],
            "category": [
                "add-1"
            ]
        }
    ]
};

Vue.component('v-select', VueSelect.VueSelect);

var app = new Vue
(
  {
    el: '#app',
    data:
    {
      cd: course_data
    },

    // Need to implement the search function, would be nice if we could dynamically update the page
    // as the user is typing inside of the search box
    // getCourse()

    // Need to sort the course data by course number
    // courseNameSort()

    // Need to only get courses by categories i think i can modify the getCategories from coureplanner app.js
    // getCategories()



  }
)
