export const submitToFormspree = async (data: any, subject: string = "New Form Submission") => {
  const endpoint = "https://formspree.io/f/mdawvjlg";
  
  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify({
        ...data,
        _subject: subject,
      }),
    });
    
    return response.ok;
  } catch (error) {
    console.error("Form submission error:", error);
    return false;
  }
};
