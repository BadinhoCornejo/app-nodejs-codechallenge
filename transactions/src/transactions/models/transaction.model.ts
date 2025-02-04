import { ObjectType, Field } from '@nestjs/graphql';
import { TransactionStatus } from '../../transactionStatus/models/transactionStatus.model';
import { TransactionType } from '../../transactionType/models/transactionType.model';
import { BaseModel } from '../../common/models/base.model';

@ObjectType()
export class Transaction extends BaseModel {
  @Field(() => String)
  transactionExternalId: number;

  @Field(() => TransactionType)
  transactionType: TransactionType;

  @Field(() => TransactionStatus)
  transactionStatus: TransactionStatus;

  @Field(() => Number)
  value: number;
}
