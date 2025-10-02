// user.js
export const user = {
  name: "Shiv",
  city: "Nanded"
};

export function greet(user) {
  return `Hello ${user.name} from ${user.city}`;
}
