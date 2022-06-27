import bcrypt  from 'bcryptjs';

export function hashIt(password){
  const salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

// compare the password user entered with hashed pass.
export async function compareIt(password,hashedPassword){
  return await bcrypt.compare(password, hashedPassword);
}