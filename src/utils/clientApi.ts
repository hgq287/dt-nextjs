const API_BASE_URL = process.env.HG_API_BASE_URL;
const API_NAMESPACE = process.env.HG_API_NAMESPACE;

export const api = {
  post: async (path: string, body: any) => {
    const res = await fetch(`${API_BASE_URL}/${API_NAMESPACE}/${path}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || 'API error');
    }
    return res.json();
  }
};
