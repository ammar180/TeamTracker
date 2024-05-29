$(document).ready(function () {
    $(".getDataButton").click(function () {
        var phaseId = $(this).val(); // Get the value of the clicked button
        $.ajax({
            url: "/WorkSpace/appendTasks",
            type: "GET",
            data: { givenPhaseId: phaseId }, // Pass the phase ID to the controller action
            success: function (response) {
                $("#taskDataContainer").html(response);
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
        $.ajax({
            url: "/WorkSpace/appendPhaseInfo",
            type: "GET",
            data: { givenPhaseId: phaseId }, // Pass the phase ID to the controller action
            success: function (response) {
                $("#read-details").html(response);
            },
            error: function (xhr, status, error) {
                console.error(xhr.responseText);
            }
        });
    });
    
});
function appendTaskJS(taskId) {
    $.ajax({
        url: "/WorkSpace/appendTaskInfo",
        type: "GET",
        data: { givenTaskeId: taskId }, // Pass the task ID to the controller action
        success: function (response) {
            $("#read-details").html(response);
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
}

editPhaseGET = (phaseId) => {
    $.ajax({
        url: "/WorkSpace/editPhase",
        type: "GET",
        data: { givenPhaseId: phaseId }, // Pass the phaseID to the controller action
        success: function (response) {
            $("#read-details").html(response);
        },
        error: function (xhr, status, error) {
            console.error(xhr.responseText);
        }
    });
};


PostEditPhase = form => {
    try {
        var theData = $(form).serialize();
        $.ajax({
            type: "POST",
            url: form.action, // Ensure this URL is correct
            data: new FormData(form),
            contentType: false,
            processData: false,
            success: function (res) {
                $("#read-details").html(res.html);
            },
            error: function (err) {
                console.error("AJAX request failed:", err);
            }
        });
    } catch (e) {
        console.error("An error occurred:", e);
    }
    return false;
}


function deletePhaseGET(phaseId) {
    $.ajax({
        url: "/WorkSpace/deletePhase",
        type: "POST",
        data: { givenPhaseId: phaseId }, // Pass the phaseID to the controller action
        success: function (response) {
            $("main").html(response.html);
        },
        error: function (err) {
            console.error("AJAX request failed:", err);
        }
});
}
