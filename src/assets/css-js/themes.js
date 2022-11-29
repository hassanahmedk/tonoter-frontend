

 const styles = {
    defaultLight:{
        themeName:"defaultLight",
        header:{
            backgroundColor:"#f7f6f0",
            headerIcon:{
                color: "rgb(20, 20, 20, 0.4)",
                "&:hover": {
                    color: "rgb(245, 245, 245)"
                  },
                headerAddIcon:{
                    backgroundColor: "#BF9E6B",
                }
            },
            
        },

        note:{ 
            backgroundColor: '#ffe4c450',
            title:{
                color:"rgba(10, 10, 10, 0.85)"
            },
            content:{
                color:"rgba(25,25,25,0.6)"
            },
            date:{
                color:"#393E46"
            },
            shadowClass: "note-shadow-light",
            starIconColor: "rgba(10,10,10,0.3)",
        },
        display:{
            displayIdle: {
                backgroundColor:"#f7f6f0",
                color:"rgba(20, 20, 20, 0.4)",
            },
            displayHeader:{
                displayHeaderTop:{
                    color: "rgba(10, 10, 10, 0.85)"
                },
                displayHeaderBottom:{
                    color:"rgba(25,25,25,0.6)"
                }
            },
            displayScreen: {
                backgroundColor: "#f7f6f0",
            },
            displayTitle:{
                color: "rgba(10, 10, 10, 0.85)"
            },
            displayContent:{
                color:"rgba(25,25,25,0.6)"
            }
        },
        
        notesSection:{
            notesHeader:{
                background: "#f7f6f088",
                notesHeaderTop:{
                    color: "rgba(10, 10, 10, 0.85)"
                }, 
                notesHeaderBottom:{
                    color:"rgba(25,25,25,0.6)"
                },
                notesHeaderIcons: {
                    color: "rgba(0,0,0,0.6)",
                },
            },
            notesScreen:{
                //background:  "url('../assets/background-textures/always-grey.png')",
                backgroundColor:  "#fef8ed",
            },
            searchExitIconColor : "rgba(10, 10, 10, 0.85)",
            noNotesText:{
                color:"rgba(20, 20, 20, 0.4)",
            }

        }, 

        newNote:{
            backgroundColor:"#EEEEEE",
            color:"rgba(10, 10, 10, 0.85)",
            inputColor:{
                color:"rgba(10, 10, 10, 0.95)",
            },
        },

        menu:{
            backgroundColor: "#f7f6f0",
        }
    },




    // Default Dark


    defaultDark:{
        themeName:"defaultDark",
        header:{
            backgroundColor:"#393939",
            headerIcon:{
                color: "rgb(185, 185, 185)",
                "&:hover": {
                    color: "rgb(245, 245, 245)"
                  },
                headerAddIcon:{
                    backgroundColor: "#fda92b",
                },
            },
        },
        note:{ 

            title:{
                color:"rgba(240, 240, 240, 0.85)"
            },
            content:{
                color:"#AAAAAA"
            },
            date:{
                color:"rgba(240, 240, 240, 0.85)"
            },
            shadowClass: "note-shadow-dark",
            starIconColor: "rgba(250,250,250,0.3)",
        },
        display:{
            displayIdle: {
                backgroundColor:"#242526",
                color:"#AAAAAA",
            },
            displayHeader:{
                displayHeaderTop:{
                    color: "rgba(250, 250, 250, 0.85)"
                },
                displayHeaderBottom:{
                    color:"rgba(250,250,250,0.6)"
                }
            },
            displayScreen: {
                backgroundColor: "#242526"
            },
            displayTitle:{
                color: "rgba(250, 250, 250, 0.85)"
            },
            displayContent:{
                color:"rgba(250,250,250,0.6)"
            }
        },
        
        notesSection:{
            notesHeader:{
                background:"#212121",
                notesHeaderTop:{
                    color: "rgba(250, 250, 250, 0.85)"
                }, 
                notesHeaderBottom: {
                    color:"rgba(250,250,250,0.6)",
                },

                notesHeaderIcons: {
                    color:"rgba(245,245,245,0.65)",
                },
            },
            notesScreen:{
                //background:  "url('../assets/background-textures/always-grey.png')",
                //backgroundColor:  "#2d281f",
                backgroundColor:  "rgba(22, 22, 22, 1)",
            },
            searchExitIconColor : "rgba(250, 250, 250, 0.85)",
            noNotesText:{
                color:"#AAAAAA77",
            }
        }, 

        newNote:{
            backgroundColor:"#242526"
        },

        menu:{
            backgroundColor: "#242526",
        }
    }

/*
    defaultDark:{
        themeName:"defaultDark",
        header:{
            backgroundColor:"#393939",
            headerIcon:{
                color: "rgb(185, 185, 185)",
                "&:hover": {
                    color: "rgb(245, 245, 245)"
                  },
            },
        },
        note:{ 

            title:{
                color:"rgba(240, 240, 240, 0.85)"
            },
            content:{
                color:"#AAAAAA"
            },
            date:{
                color:"rgba(240, 240, 240, 0.85)"
            },
            shadowClass: "note-shadow-dark",
            starIconColor: "rgba(250,250,250,0.3)",
        },
        display:{
            displayIdle: {
                backgroundColor:"#242526",
                color:"#AAAAAA",
            },
            displayHeader:{
                displayHeaderTop:{
                    color: "rgba(250, 250, 250, 0.85)"
                },
                displayHeaderBottom:{
                    color:"rgba(250,250,250,0.6)"
                }
            },
            displayScreen: {
                backgroundColor: "#242526"
            },
            displayTitle:{
                color: "rgba(250, 250, 250, 0.85)"
            },
            displayContent:{
                color:"rgba(250,250,250,0.6)"
            }
        },
        
        notesSection:{
            notesHeader:{
                background:"#212121",
                notesHeaderTop:{
                    color: "rgba(250, 250, 250, 0.85)"
                }, 
                notesHeaderBottom:{
                    color:"rgba(250,250,250,0.6)"
                }
            },
            notesScreen:{
                //background:  "url('../assets/background-textures/always-grey.png')",
                //backgroundColor:  "#2d281f",
                backgroundColor:  "rgba(22, 22, 22, 1)",
            },
            searchExitIconColor : "rgba(250, 250, 250, 0.85)"
        }, 

        newNote:{
            backgroundColor:"#242526"
        }
    }
    
*/

}
export default styles;