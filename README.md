# L2K_TeamStructureGenerator
Requirement : Generate and display the structure of a team as specified by a user.

The Command Line Interface (CLI) provides the user with a primitive Interactive Text Response (ITR) menu which allows the user to select an employee category from the list of choices:
*   Manager
*   Engineer
*   Intern

The fourth choice shown below terminates the program and generates an html file which displays the team members entered. 
*   Terminator - end team selection

Team members may be entered in any order but the manager will alway be the first employee in the sequence. Additionally (in the tradition of Highlander, Jet Li's The One) there can only be one manager specified. Each time the role of manager is selected, the team is checked for the role already being present. If the role already exists the user is asked to select a different role by presenting the initial list of choices minus the Manager option.

Each team member being added must have at a minimum:
*   ID - generated via Math.random function
*   Name - entered via ITR menu
*   Email - entered via ITR menu

Role specific information is obtained from the ITR or the Github api in the case of engineers. Please note that while the api does hold email addresses the one entered via IR is used as the individual may not have a github profile or the github user name may not have been correctly entered.

The generated html file shows the team members entered as a series of "cards" with the manager (as stated before) appearing first. The remaining team members appear in the order in which they were entered. Each role displays a characteristic icon providing a visual identification to aid in viewing the information.

