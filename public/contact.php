<?php
// Database configuration
$servername = "localhost";
$username = "root";        // Default XAMPP MySQL username
$password = "";            // Default XAMPP MySQL password (leave it blank if you haven't set one)
$dbname = "contact_db";    // Your database name

// configure email details
$from = 'Demo contact form <demo@domain.com>';
$sendTo = 'Test contact form <hisham.a.mohamed007@gmail.com>'; // Add your email here
$subject = 'New message from contact form';
$fields = array('name' => 'Name', 'subject' => 'Subject', 'email' => 'Email', 'message' => 'Message'); // array variable name => Text to appear in the email
$okMessage = 'Contact form successfully submitted. Thank you, I will get back to you soon!';
$errorMessage = 'There was an error while submitting the form. Please try again later';

// let's do the sending
try {
    // Establish a connection to the MySQL database
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Check for connection errors
    if ($conn->connect_error) {
        throw new Exception("Database connection failed: " . $conn->connect_error);
    }

    $emailText = "You have a new message from the contact form\n=============================\n";

    foreach ($_POST as $key => $value) {
        if (isset($fields[$key])) {
            $emailText .= "$fields[$key]: $value\n";
        }
    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Insert the form data into the database
    $stmt = $conn->prepare("INSERT INTO contacts (name, email, subject, message) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $email, $subject, $message);

    if ($stmt->execute() === FALSE) {
        throw new Exception("Error inserting data: " . $conn->error);
    }

    // Send the email
    $headers = array('Content-Type: text/plain; charset="UTF-8";',
        'From: ' . $from,
        'Reply-To: ' . $from,
        'Return-Path: ' . $from,
    );
    
    mail($sendTo, $subject, $emailText, implode("\n", $headers));

    $responseArray = array('type' => 'success', 'message' => $okMessage);

    // Close the database connection
    $stmt->close();
    $conn->close();
}
catch (Exception $e) {
    $responseArray = array('type' => 'danger', 'message' => $errorMessage . " Error: " . $e->getMessage());
}

// Return JSON response
if (!empty($_SERVER['HTTP_X_REQUESTED_WITH']) && strtolower($_SERVER['HTTP_X_REQUESTED_WITH']) == 'xmlhttprequest') {
    $encoded = json_encode($responseArray);
    header('Content-Type: application/json');
    echo $encoded;
}
else {
    echo $responseArray['message'];
}
