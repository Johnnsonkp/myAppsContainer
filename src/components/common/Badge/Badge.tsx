import { Avatar, Button } from 'antd';
import React, { useState } from 'react';

export const DisplayBadge: React.FC = () => {
    const UserList = ['JN', 'Lucy', 'Tom', 'Edward'];
    const GapList = [4, 3, 2, 1];
    const ColorList = ['transparent','#f56a00', '#7265e6', '#ffbf00', '#00a2ae'];

    const [user, setUser] = useState(UserList[0]);
    const [color, setColor] = useState(ColorList[0]);
    const [gap, setGap] = useState(GapList[0]);

    const changeUser = () => {
      const index = UserList.indexOf(user);
      setUser(index < UserList.length - 1 ? UserList[index + 1] : UserList[0]);
      setColor(index < ColorList.length - 1 ? ColorList[index + 1] : ColorList[0]);
    };
    const changeGap = () => {
      const index = GapList.indexOf(gap);
      setGap(index < GapList.length - 1 ? GapList[index + 1] : GapList[0]);
    };
    return (
      <>
        <Avatar style={{ backgroundColor: color, verticalAlign: 'middle', color: '#111', border: '1.5px solid lightgrey' }} size="large" gap={gap}>
          {user}
        </Avatar>
        {/* <Button
          size="small"
          style={{ margin: '0 12px', verticalAlign: 'middle' }}
          onClick={changeUser}
        >
          ChangeUser
        </Button>
        <Button size="small" style={{ verticalAlign: 'middle' }} onClick={changeGap}>
          changeGap
        </Button> */}
      </>
    );
};