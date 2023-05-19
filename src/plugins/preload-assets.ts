interface CustomProcess extends NodeJS.Process {
    client: boolean | null | any;
}

declare const process: CustomProcess;

export default () => {
    const images: string[] = [
        "/img/logo.png",
        "/img/logo_sm.png",
        "/img/background-hellbourne.png",
        "/img/background-hellbourne-vignette.jpg",
        "/img/background-hellscape.png",
        "/img/background-hellscape-3x.png",
        "/img/backgrounds/1.png",
        "/img/backgrounds/2.png",
        "/img/backgrounds/3.png",
        "/img/backgrounds/4.png",
        "/img/backgrounds/5.png",
        "/img/backgrounds/6.png",
    ];

    const videos: string[] = [
        "/vid/hero.webm",
        "/vid/hero-blurred.webm",
        "/vid/savage2overview.mp4",
    ];

    if (process.client) {
        const imagePromises: Promise<void>[] = images.map((imagePath: string) => {
            const img: HTMLImageElement = new Image();
            img.src = imagePath;
            return new Promise<void>((resolve, reject) => {
                img.onload = () => {
                    resolve();
                };
                img.onerror = () => {
                    reject(new Error(`Failed to load image ${imagePath}`));
                };
            });
        });
        const videoPromises: Promise<void>[] = videos.map((videoPath: string) => {
            const video: HTMLVideoElement = document.createElement('video');
            video.src = videoPath;
            return new Promise<void>((resolve, reject) => {
                video.onloadedmetadata = () => {
                    resolve();
                };
                video.onerror = () => {
                    reject(new Error(`Failed to load video ${videoPath}`));
                };
            });
        });

        window.onload = () => {
            Promise.all([imagePromises, videoPromises])
                .then(() => {
                    console.log("Assets loaded");
                })
                .catch((error: Error) => {
                    console.error("Error loading assets:", error);
                });
        };
    }
};
