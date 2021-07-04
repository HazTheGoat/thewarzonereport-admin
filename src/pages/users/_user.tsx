import { useEffect } from "react";
import { useState } from "react";

const User = ({ user, updateUser }: any) => {
  const [avatar, setAvatar] = useState<string>(user.avatar);
  const [name, setName] = useState<string>(user.name);
  const [username, setUsername] = useState<string>(user.username);
  const [platform, setPlatform] = useState<string>(user.platform);

  useEffect(() => {
    // call the handler
    updateUser({ avatar, name, username, platform });
  }, [avatar, name, username, platform]);

  return (
    <div>
      <div>
        <label htmlFor={`avatar${user.username}`}>Avatar</label>
        <input
          type="text"
          onChange={(e) => setAvatar(e.target.value)}
          id={`avatar${user.username}`}
          value={avatar}
        />
      </div>
      <div>
        <label htmlFor={`name${user.username}`}>Name</label>
        <input
          type="text"
          onChange={(e) => setName(e.target.value)}
          id={`name${user.username}`}
          value={name}
        />
      </div>
      <div>
        <label htmlFor={`username${user.username}`}>Username</label>
        <input
          type="text"
          onChange={(e) => setUsername(e.target.value)}
          id={`username${user.username}`}
          value={username}
        />
      </div>
      <div>
        <label htmlFor={`platform${user.username}`}>Platform</label>
        <input
          type="text"
          onChange={(e) => setPlatform(e.target.value)}
          id={`platform${user.username}`}
          value={platform}
        />
      </div>
      <br />
      <br />
    </div>
  );
};

export default User;
