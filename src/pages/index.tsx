import { Item } from "@/component/Item";
import { Badge, Button } from "antd";
import { Collapse } from "antd";
import { JSX } from "react";

const url = "localhost:3000/api";

const data = [
        {
                name: "cat.cute",
                tag: "Cat",
                schemaName: "CuteCatSchema",
                description: "귀여운 고양이 메소드",
                shape: {
                        name: {
                                description: "고양이 이름",
                                type: "string",
                                checks: [
                                        {
                                                kind: "min",
                                                value: 1,
                                        },
                                ],
                                optional: true,
                        },
                        file: {
                                description: "고양이 사진",
                                type: "array",
                                itemType: "object",
                                minLength: {
                                        value: 1,
                                },
                                maxLength: {
                                        value: 1,
                                },
                                exactLength: null,
                                item: {
                                        description: "ZODFILE",
                                        type: "file",
                                },
                        },
                        age: {
                                description: "고양이 나이",
                                type: "number",
                                checks: [
                                        {
                                                kind: "max",
                                                value: 20,
                                                inclusive: true,
                                        },
                                ],
                                optional: true,
                        },
                        family: {
                                description: "고양이 가족",
                                type: "object",
                                schema: {
                                        mother: {
                                                description: "엄마 고양이 이름",
                                                type: "string",
                                                checks: [],
                                        },
                                        father: {
                                                description: "아빠 고양이 이름",
                                                type: "string",
                                                checks: [],
                                        },
                                },
                                optional: true,
                        },
                },
        },
        {
                name: "dog.cute",
                tag: "Dog",
                schemaName: "CuteDogSchema",
                description: "귀여운 강아지 메소드 인풋",
                shape: {
                        name: {
                                description: "강아지 이름",
                                type: "string",
                                checks: [
                                        {
                                                kind: "min",
                                                value: 1,
                                        },
                                ],
                                optional: true,
                        },
                        age: {
                                description: "강아지 나이",
                                type: "number",
                                checks: [
                                        {
                                                kind: "max",
                                                value: 20,
                                                inclusive: true,
                                        },
                                ],
                        },
                        sex: {
                                description: "강아지 성별",
                                type: "enum",
                                values: ["m", "f"],
                        },
                        owner: {
                                description: "강아지 주인 이름",
                                type: "string",
                                checks: [],
                        },
                },
        },
        {
                name: "roach.cute",
                tag: "Roach",
                schemaName: "CuteRoachSchema",
                description: "귀여운 바퀴벌레 메소드",
                shape: {
                        name: {
                                description: "바퀴벌레 이름",
                                type: "string",
                                checks: [],
                                optional: true,
                        },
                        children: {
                                type: "array",
                                itemType: "object",
                                minLength: null,
                                maxLength: null,
                                exactLength: null,
                                item: {
                                        type: "object",
                                        schema: {
                                                name: {
                                                        description: "바퀴벌레의 자식들 이름",
                                                        type: "string",
                                                        checks: [],
                                                },
                                                disgust: {
                                                        description: "혐오감 수치",
                                                        type: "number",
                                                        checks: [
                                                                {
                                                                        kind: "min",
                                                                        value: 0,
                                                                        inclusive: true,
                                                                },
                                                                {
                                                                        kind: "max",
                                                                        value: 100,
                                                                        inclusive: true,
                                                                },
                                                        ],
                                                },
                                        },
                                },
                        },
                },
        },
        {
                name: "estimate.req",
                tag: "Estimate",
                schemaName: "estimateReqWriteDto",
                shape: {
                        estimate_type: {
                                type: "string",
                                checks: [],
                        },
                        dep: {
                                type: "object",
                                schema: {
                                        country_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        airport_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        iata_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        company_name_english: {
                                                type: "string",
                                                checks: [],
                                        },
                                        postal_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_english: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_english_detail: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_korean: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_korean_detail: {
                                                type: "string",
                                                checks: [],
                                        },
                                        phone_country_code_seq: {
                                                type: "string",
                                                checks: [],
                                        },
                                        phone_number: {
                                                type: "string",
                                                checks: [],
                                        },
                                        fax_country_code_seq: {
                                                type: "string",
                                                checks: [],
                                        },
                                        fax_number: {
                                                type: "string",
                                                checks: [],
                                        },
                                },
                        },
                        arr: {
                                type: "object",
                                schema: {
                                        country_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        airport_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        iata_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        company_name_english: {
                                                type: "string",
                                                checks: [],
                                        },
                                        postal_code: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_english: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_english_detail: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_korean: {
                                                type: "string",
                                                checks: [],
                                        },
                                        address_korean_detail: {
                                                type: "string",
                                                checks: [],
                                        },
                                        phone_country_code_seq: {
                                                type: "string",
                                                checks: [],
                                        },
                                        phone_number: {
                                                type: "string",
                                                checks: [],
                                        },
                                        fax_country_code_seq: {
                                                type: "string",
                                                checks: [],
                                        },
                                        fax_number: {
                                                type: "string",
                                                checks: [],
                                        },
                                },
                        },
                        scheduleInfo: {
                                type: "object",
                                schema: {
                                        cargo_readiness_date: {
                                                type: "date",
                                        },
                                        desired_departure_date: {
                                                type: "date",
                                        },
                                        desired_arrival_date: {
                                                type: "date",
                                        },
                                },
                        },
                        cargo_information: {
                                type: "array",
                                itemType: "object",
                                minLength: null,
                                maxLength: null,
                                exactLength: null,
                                item: {
                                        type: "object",
                                        schema: {
                                                cargo_name_korean: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                cargo_name_english: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                total_amount: {
                                                        type: "string",
                                                        checks: [],
                                                        optional: true,
                                                },
                                                currency_unit_seq: {
                                                        type: "string",
                                                        checks: [],
                                                        optional: true,
                                                },
                                                hs_code: {
                                                        type: "string",
                                                        checks: [],
                                                        optional: true,
                                                },
                                                total_weight: {
                                                        type: "string",
                                                        checks: [],
                                                        optional: true,
                                                },
                                                weight_unit_seq: {
                                                        type: "string",
                                                        checks: [],
                                                        optional: true,
                                                },
                                                l_d_origin_postal_code: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_origin_address_korean: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_origin_address_korean_detail: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_origin_address_english: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_origin_address_english_detail: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_destination_postal_code: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_destination_address_korean: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_destination_address_korean_detail: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_destination_address_english: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_destination_address_english_detail: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_charge_name: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_phone_country_code_seq: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                l_d_charge_phone_number: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                        },
                                },
                        },
                        packing_method: {
                                type: "array",
                                itemType: "object",
                                minLength: null,
                                maxLength: null,
                                exactLength: null,
                                item: {
                                        type: "object",
                                        schema: {
                                                packing_method_seq: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                packing_width: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                packing_length: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                packing_height: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                                packing_quantity: {
                                                        type: "string",
                                                        checks: [],
                                                },
                                        },
                                },
                                optional: true,
                        },
                        totalCargoInformation: {
                                type: "object",
                                schema: {
                                        goods_price: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        goods_weight: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        v_w: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        cbm: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                },
                                optional: true,
                        },
                        addOnService: {
                                type: "object",
                                schema: {
                                        cargo_insurance_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        airport_warehouse_receiving_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        destination_customs_clearance_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        export_declaration: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        cargo_transportation: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        manifest_filing_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        local_delivery_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                },
                                optional: true,
                        },
                        tradeInformation: {
                                type: "object",
                                schema: {
                                        fob_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        cfr_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        cif_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        dap_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        dpu_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        ddp_yn: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        transaction_etc: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                },
                                optional: true,
                        },
                        note: {
                                type: "string",
                                checks: [],
                                optional: true,
                        },
                        quotations_deadline: {
                                type: "date",
                        },
                        chargeInformation: {
                                type: "object",
                                schema: {
                                        charge_name: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                        charge_phone_number: {
                                                type: "string",
                                                checks: [],
                                                optional: true,
                                        },
                                },
                                optional: true,
                        },
                        estimate_partner: {
                                type: "string",
                                checks: [],
                                optional: true,
                        },
                },
        },
];

const render = (datas: any[]) => {
        const result: JSX.Element[] = [];
        datas.forEach((data, key) => {
                result.push(<Item key={Math.random()} {...data}></Item>);
        });
        return result;
};
const Home = () => (
        <div className="App">
                <h1>Chwagger BoxGo</h1>
                <h6>[Base URL: localhost:3000/api]</h6>
                {render(data)}
        </div>
);

export default Home;
