$(document).ready(function() {
    let currentIndex = 0; // Initialize index
    if ($('#lightbox').length && $('.gallery-grid').length) {
        const images = $('.gallery-image');

        // Open lightbox
        $('.gallery-grid').on('click', '.gallery-image', function() {
            currentIndex = $('.gallery-image').index(this);
            updateLightbox();
            $('#lightbox').fadeIn(300);
        });

        // Close lightbox
        $('.close-btn').on('click', function() {
            console.log('Close button clicked'); // Debug
            $('#lightbox').fadeOut(300);
        });

        // Previous image
        $('.prev-btn').on('click', function() {
            console.log('Prev button clicked'); // Debug
            currentIndex = (currentIndex - 1 + images.length) % images.length;
            updateLightbox();
        });

        // Next image
        $('.next-btn').on('click', function() {
            console.log('Next button clicked'); // Debug
            currentIndex = (currentIndex + 1) % images.length;
            updateLightbox();
        });

        // Keyboard navigation
        $(document).on('keydown', function(e) {
            if ($('#lightbox').is(':visible')) {
                if (e.key === 'ArrowLeft') {
                    currentIndex = (currentIndex - 1 + images.length) % images.length;
                    updateLightbox();
                } else if (e.key === 'ArrowRight') {
                    currentIndex = (currentIndex + 1) % images.length;
                    updateLightbox();
                } else if (e.key === 'Escape') {
                    $('#lightbox').fadeOut(300);
                }
            }
        });

        function updateLightbox() {
            const src = images.eq(currentIndex).attr('src');
            const alt = images.eq(currentIndex).attr('alt');
            $('#lightbox-img').attr({ src: src, alt: alt });
            console.log('Updated lightbox with src:', src); // Debug
        }
    }
});
