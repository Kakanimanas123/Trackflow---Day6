/**
 * Generate a unique ID
 */
export const generateId = (): string => {
  return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
};

/**
 * Format a date string to a more readable format
 */
export const formatDate = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
};

/**
 * Format a date for input fields (YYYY-MM-DD)
 */
export const formatDateForInput = (dateString: string): string => {
  const date = new Date(dateString);
  return date.toISOString().split('T')[0];
};

/**
 * Get relative time (e.g. "2 days ago", "in 3 days")
 */
export const getRelativeTime = (dateString: string): string => {
  const now = new Date();
  const date = new Date(dateString);
  const diffInDays = Math.floor((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
  
  if (diffInDays === 0) {
    return 'Today';
  } else if (diffInDays === 1) {
    return 'Tomorrow';
  } else if (diffInDays === -1) {
    return 'Yesterday';
  } else if (diffInDays > 0) {
    return `In ${diffInDays} days`;
  } else {
    return `${Math.abs(diffInDays)} days ago`;
  }
};

/**
 * Get color for lead stage
 */
export const getLeadStageColor = (stage: string): string => {
  switch (stage) {
    case 'New':
      return 'bg-blue-100 text-blue-800';
    case 'Contacted':
      return 'bg-purple-100 text-purple-800';
    case 'Qualified':
      return 'bg-indigo-100 text-indigo-800';
    case 'Proposal Sent':
      return 'bg-yellow-100 text-yellow-800';
    case 'Won':
      return 'bg-green-100 text-green-800';
    case 'Lost':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Get color for order stage
 */
export const getOrderStageColor = (stage: string): string => {
  switch (stage) {
    case 'Order Received':
      return 'bg-blue-100 text-blue-800';
    case 'In Development':
      return 'bg-yellow-100 text-yellow-800';
    case 'Ready to Dispatch':
      return 'bg-indigo-100 text-indigo-800';
    case 'Dispatched':
      return 'bg-green-100 text-green-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

/**
 * Calculate days until a date
 */
export const daysUntil = (dateString: string): number => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  return Math.ceil((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
};

/**
 * Check if a date is in the past
 */
export const isDatePast = (dateString: string): boolean => {
  const now = new Date();
  now.setHours(0, 0, 0, 0);
  const date = new Date(dateString);
  date.setHours(0, 0, 0, 0);
  return date < now;
};

/**
 * Get urgency class based on days
 */
export const getUrgencyClass = (days: number): string => {
  if (days < 0) {
    return 'text-red-600 font-medium';
  } else if (days === 0) {
    return 'text-orange-600 font-medium';
  } else if (days <= 2) {
    return 'text-yellow-600';
  } else {
    return 'text-gray-600';
  }
};