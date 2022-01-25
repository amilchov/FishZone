from sqlalchemy import create_engine, MetaData

engine = create_engine('mysql+pymysql://root:NEWPASSWORD@localhost:3306/Fishzone')
meta = MetaData()
conn = engine.connect()