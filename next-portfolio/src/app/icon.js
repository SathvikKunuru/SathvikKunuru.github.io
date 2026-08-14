import { ImageResponse } from 'next/og';
import { readFileSync } from 'fs';
import { join } from 'path';

export const size = {
  width: 64,
  height: 64,
};
export const contentType = 'image/png';

export default function Icon() {
  // Read the profile image from public folder
  const profileImage = readFileSync(join(process.cwd(), 'public', 'profile.png'));
  const base64Image = profileImage.toString('base64');

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid #06b6d4', // Optional: adds a nice cyber-cyan border around your circular face!
        }}
      >
        <img 
            src={`data:image/png;base64,${base64Image}`} 
            style={{ 
                width: '100%', 
                height: '100%', 
                objectFit: 'cover' 
            }} 
        />
      </div>
    ),
    {
      ...size,
    }
  );
}
