# Data Model: Sooraj Santhosh Portfolio Website v2

This document outlines the data entities for the Sooraj Santhosh portfolio website.

## Entities

### Song

-   **Title**: string
-   **Album**: string
-   **Release Date**: date
-   **Streaming Links**: array of objects (platform: string, url: string)

### Album

-   **Title**: string
-   **Release Date**: date
-   **Cover Art**: string (URL to image)
-   **Tracklist**: array of strings (song titles)

### Event

-   **Date**: date
-   **Venue**: string
-   **City**: string
-   **Ticket Link**: string (URL)

### Photo

-   **Image**: string (URL to image)
-   **Caption**: string

### Video

-   **Title**: string
-   **URL**: string (e.g., YouTube URL)
-   **Thumbnail**: string (URL to image)
