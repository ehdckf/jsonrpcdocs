
import { Item } from '@/component/Item';
import { Badge, Button } from 'antd';
import { Collapse } from 'antd';
import { JSX } from 'react';
const data = [
  {
    "name": "cat.cute",
    "tag": "Cat",
    "schemaName": "CuteCatSchema",
    "description": "귀여운 고양이 메소드",
    "shape": {
      "name": {
        "description": "고양이 이름",
        "type": "string",
        "checks": [
          {
            "kind": "min",
            "value": 1
          }
        ],
        "optional": true
      },
      "file": {
        "description": "고양이 사진",
        "type": "array",
        "itemType": "object",
        "minLength": null,
        "maxLength": {
          "value": 1
        },
        "exactLength": null,
        "item": {
          "description": "ZODFILE",
          "type": "file"
        }
      },
      "age": {
        "description": "고양이 나이",
        "type": "number",
        "checks": [
          {
            "kind": "max",
            "value": 20,
            "inclusive": true
          }
        ]
      },
      "family": {
        "description": "고양이 가족",
        "type": "object",
        "schema": {
          "mother": {
            "description": "엄마 고양이 이름",
            "type": "string",
            "checks": []
          },
          "father": {
            "description": "아빠 고양이 이름",
            "type": "string",
            "checks": []
          }
        },
        "optional": true
      }
    }
  },
  {
    "name": "dog.cute",
    "tag": "Dog",
    "schemaName": "CuteDogSchema",
    "description": "귀여운 강아지 메소드 인풋",
    "shape": {
      "name": {
        "description": "강아지 이름",
        "type": "string",
        "checks": [
          {
            "kind": "min",
            "value": 1
          }
        ],
        "optional": true
      },
      "age": {
        "description": "강아지 나이",
        "type": "number",
        "checks": [
          {
            "kind": "max",
            "value": 20,
            "inclusive": true
          }
        ]
      },
      "sex": {
        "type": "enum"
      },
      "owner": {
        "description": "강아지 주인 이름",
        "type": "string",
        "checks": []
      }
    }
  },
  {
    "name": "roach.cute",
    "tag": "Roach",
    "schemaName": "CuteRoachSchema",
    "description": "귀여운 바퀴벌레 메소드",
    "shape": {
      "name": {
        "description": "바퀴벌레 이름",
        "type": "string",
        "checks": [],
        "optional": true
      },
      "children": {
        "type": "array",
        "itemType": "object",
        "minLength": null,
        "maxLength": null,
        "exactLength": null,
        "item": {
          "type": "object",
          "schema": {
            "name": {
              "description": "바퀴벌레의 자식들 이름",
              "type": "string",
              "checks": []
            },
            "disgust": {
              "description": "혐오감 수치",
              "type": "number",
              "checks": [
                {
                  "kind": "min",
                  "value": 0,
                  "inclusive": true
                },
                {
                  "kind": "max",
                  "value": 100,
                  "inclusive": true
                }
              ]
            }
          }
        }
      }
    }
  }
]

const render = (datas:any[])=>{
  const result: JSX.Element[] = [];
  datas.forEach((data,key)=>{
    result.push(<Item key={key} {...data}></Item>)
  })
  return result;
}
const Home = () => (
  <div className="App">
   {render(data)}
  </div>
);

export default Home;