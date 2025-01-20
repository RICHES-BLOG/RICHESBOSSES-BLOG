$spam_keywords = array('viagra', 'casino', 'porn', 'sex');
$spam_found = false;

foreach ($spam_keywords as $keyword) {
    if (preg_match('/' . $keyword . '/i', $_POST['message'])) {
        $spam_found = true;
        break;
    }
}

if ($spam_found || !filter_var($_POST['email'], FILTER_VALIDATE_EMAIL)) {
	header('Location: spam-error.php');
	exit;
}

<?php
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$to = 'your-email@example.com';
$subject = 'Contact Form Submission';

$body = "Name: $name\nEmail: $email\nMessage: $message";

$headers = 'From: ' . $email . "\r\n" .
'Reply-To: ' . $email . "\r\n" .
'X-Mailer: PHP/' . phpversion();

mail($to, $subject, $body, $headers);

echo 'Thank you for contacting us! We will respond to your message shortly.';
?>

$secretKey = "YOUR_SECRET_KEY";
$response = $_POST['g-recaptcha-response'];
$verifyResponse = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret='.$secretKey.'&response='.$response);
$responseData = json_decode($verifyResponse);
if ($responseData->success) {
    // Captcha is valid, process the form submission
} else {
    // Captcha is invalid, display an error message
    echo 'Invalid captcha, please try again.';
    exit;
}
