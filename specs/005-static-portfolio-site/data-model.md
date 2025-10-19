# Data Model: Static Portfolio Site

**Feature Branch**: `feat/static-portfolio-site`  
**Created**: October 19, 2025  
**Status**: Draft  

## Entities

### Website Content

**Description**: Represents all static assets and textual information displayed on the portfolio website.

**Attributes**:

*   `text`: String - All textual content, including biographies, descriptions, and general information.
*   `images`: Array of Strings (URLs/Paths) - Paths or URLs to image files (e.g., gallery photos, profile pictures).
*   `music`: Array of Strings (URLs/Paths) - Paths or URLs to audio files (e.g., song samples, recordings).
*   `videos`: Array of Strings (URLs/Paths) - Paths or URLs to video files (e.g., performance clips, interviews).

**Relationships**: None (self-contained static assets).

### Contact Form Data

**Description**: Represents the information collected from the user via the contact form before being sent to the artist's email.

**Attributes**:

*   `name`: String - The name of the person submitting the form.
*   `email`: String - The email address of the person submitting the form.
*   `subject`: String - The subject of the message.
*   `message`: String - The body of the message.

**Relationships**: None (data is used to construct an email, not stored persistently by the application).
