const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: '6fcdb4511f3842593a2746745a208f74',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;