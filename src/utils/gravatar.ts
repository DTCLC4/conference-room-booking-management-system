import crypto from 'crypto'

export const getGravatarImage = (email: string, size: number = 200, defaultImage: string = 'mp'): string => {
  const hashedEmail = crypto.createHash('md5').update(email.trim().toLowerCase()).digest('hex');
  return `https://www.gravatar.com/avatar/${hashedEmail}?s=${size}&d=${defaultImage}`
}
