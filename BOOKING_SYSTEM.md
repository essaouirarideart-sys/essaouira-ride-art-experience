# Booking System Implementation

## Overview
A complete inline booking system with Nodemailer integration for email notifications. Users can select packages on activity pages and fill out a booking form that scrolls into view automatically.

## Features Implemented

### 1. API Route (`/api/booking`)
- **Location**: `src/app/api/booking/route.ts`
- **Method**: POST
- **Functionality**:
  - Accepts booking form data
  - Validates required fields (name, phone, activity, package)
  - Validates email format if provided
  - Sends formatted HTML email via Gmail SMTP
  - Returns success/error response

### 2. Inline Booking Form Component
- **Location**: `src/components/ui/InlineBookingForm.tsx`
- **Features**:
  - Full name input (required)
  - Phone/WhatsApp input (required)
  - Email input (optional)
  - Preferred date picker
  - Number of people selector
  - Message textarea (optional)
  - Auto-filled package details display
  - Smooth scroll animation when activated
  - Loading, success, and error states
  - Bilingual support (French/English)

### 3. Activity Page Integration
- **Location**: `src/app/[locale]/activities/[slug]/ActivityPageClient.tsx`
- **Changes**:
  - Separated client-side booking state from server component
  - Passes selected package to inline form
  - Handles package selection callback
  - Displays inline form after booking section

### 4. Activity Booking Section Updates
- **Location**: `src/components/ui/ActivityBookingSection.tsx`
- **Changes**:
  - Simplified to handle package selection only
  - Passes `onSelectPackage` callback to parent
  - Removed modal functionality
  - Pricing cards trigger form scroll instead

## Setup Instructions

### 1. Environment Variables
Create or update `.env.local` with Gmail credentials:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password-here
```

**Important**: Use Gmail App Password, NOT your regular password
- Go to: https://myaccount.google.com/apppasswords
- Select "Mail" and "Windows Computer" (or your device)
- Generate and copy the 16-character password
- Paste into `EMAIL_PASS`

### 2. Dependencies
Already installed:
- `nodemailer` - Email sending
- `@types/nodemailer` - TypeScript types

### 3. Email Configuration
The system uses Gmail SMTP:
- Service: `gmail`
- Auth: App Password authentication
- Recipient: Emails sent to `EMAIL_USER` address
- Reply-To: Client's email (if provided)

## Form Behavior

### User Flow
1. User views activity page
2. Clicks "Book this package" on a pricing card
3. Page smoothly scrolls to booking form
4. Form highlights with glow animation
5. Package details auto-fill in form header
6. User fills remaining fields
7. Submits form
8. Loading state shows while sending
9. Success message displays on completion
10. Form resets after 5 seconds

### Form Fields
- **Activity**: Auto-filled from page context
- **Package Name**: Auto-filled from selected tier
- **Duration**: Auto-filled from selected tier
- **Price**: Auto-filled from selected option
- **Name**: User input (required)
- **Phone/WhatsApp**: User input (required)
- **Email**: User input (optional)
- **Date**: User input (optional)
- **People**: Dropdown 1-10 (default: 2)
- **Message**: User input (optional)

## Email Template
Emails include:
- Activity name
- Selected package details (name, duration, price)
- Client information (name, phone, email)
- Booking details (date, number of people)
- Custom message if provided
- Professional HTML formatting with gold accent colors

## Validation

### Client-Side
- Required fields: name, phone, activity, packageName
- Email format validation (if provided)
- Date picker minimum: today

### Server-Side
- Required fields validation
- Email format validation
- Prevents empty submissions

## Security

### Implemented
- Email field validation
- Required field validation
- Environment variables for credentials
- No sensitive data in client code
- CSRF protection via Next.js

### Recommendations
- Use HTTPS in production
- Implement rate limiting on API route
- Add CAPTCHA for spam prevention
- Monitor email delivery logs

## Styling
- Dark premium design matching site theme
- Gold accent colors for CTAs
- Responsive mobile-first layout
- Smooth animations with Framer Motion
- Accessible form inputs with proper labels

## Troubleshooting

### Emails Not Sending
1. Check `EMAIL_USER` and `EMAIL_PASS` in `.env.local`
2. Verify Gmail App Password (not regular password)
3. Check Gmail account "Less secure app access" is enabled
4. Verify SMTP settings in `route.ts`

### Form Not Scrolling
1. Check browser console for JavaScript errors
2. Verify `scroll-mt-20` class is applied
3. Check Framer Motion is installed

### Validation Errors
1. Check required fields are filled
2. Verify email format if provided
3. Check browser console for API response

## Testing

### Manual Testing
1. Navigate to any activity page
2. Click "Book this package" on a pricing card
3. Verify form scrolls into view
4. Verify package details are pre-filled
5. Fill form and submit
6. Check success message appears
7. Verify email received at `EMAIL_USER`

### Test Email Content
The email should include:
- All booking details
- Client information
- Package information with price
- Professional formatting

## Future Enhancements
- SMS notifications via Twilio
- Booking confirmation email to client
- Admin dashboard for bookings
- Calendar integration
- Payment processing
- Automated follow-up emails
