// This JQuery Function starts execution when DOM is loaded
$(document).ready(function() {
    // Object containing skill names as keys and their respective skill levels as values
    var skillLevels = {
        "Python": 90,
        "C": 70,
        "C++": 85,
        "R": 70,
        "MySQL": 80,
        "Microsoft Office": 95,
        "Microsoft Power BI": 85
    };

     // Selecting all list items within the element with id 'skillList' and iterate over them one by one
    $("#skillList li").each(function() {
        // Get the text of the current list item, trim any white space, and store it in the variable skill
        var skill = $(this).text().trim();
        // Get the corresponding skill level from the skillLevels object
        var level = skillLevels[skill];
        // If it is found,
        if (level !== undefined) {
            // Append a div with class 'progress-bar-container' to the current list item.
            // Inside it, insert another div with class 'progress-bar' which represents the actual bar.
            // The 'style' attribute applies styling to the tag
            $(this).append('<div class="progress-bar-container"><div class="progress-bar" role="progressbar" style="width: ' + level + '%" aria-valuenow="' + level + '" aria-valuemin="0" aria-valuemax="100"></div></div>');
        }
    });
});
