from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy_serializer import SerializerMixin
from sqlalchemy.ext.associationproxy import association_proxy
from datetime import datetime

metadata = MetaData(naming_convention={
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
})

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
    __tablename__ = 'users'

    # Fields
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(100), nullable=False, unique=True)
    password_hash = db.Column(db.String(120), nullable=False)
    user_post_count = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships
    postvotes = db.relationship("Postvote", back_populates="user", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates="user", cascade="all, delete-orphan")
    replies = db.relationship("Reply", back_populates="user", cascade="all, delete-orphan")

    posts = association_proxy("postvotes", "post", creator=lambda p: Postvote(post=p))

    # Serializer
    serialize_rules = ('-post_votes', '-comments', 'replies')

    # Login/Signup Data
    def __repr__(self):
        return f'`<User id="{self.id}" username="{self.username}"`>'
    
    def to_dict(self):
        return {
            "id": self.id,
            "username": self.username,
            "user_post_count": self.user_post_count,
            "date_created": self.date_created
        }

class Post(db.Model, SerializerMixin):
    __tablename__ = "posts"

    # Fields
    id = db.Column(db.Integer, primary_key=True)
    posted_by_user = db.Column(db.Integer, db.ForeignKey("users.username"), nullable=False)

    title = db.Column(db.String, nullable=False)
    content = db.Column(db.String, nullable=False)
    vote_count = db.Column(db.Integer, default=1)
    comment_count = db.Column(db.Integer, default=0)
    date_created = db.Column(db.DateTime, default=datetime.utcnow)

    # Relationships 
    postvotes = db.relationship("Postvote", back_populates="post", cascade="all, delete-orphan")
    comments = db.relationship("Comment", back_populates="post")

    users = association_proxy("Postvotes", "user", creator=lambda u: Postvote(user=u))

    # Serializer
    serialize_rules = ("-post_votes", "-comments")

class Comment(db.Model, SerializerMixin):
    __tablename__ = "comments"

    # Fields
    id = db.Column(db.Integer, primary_key=True)
    post_id = db.Column(db.Integer, db.ForeignKey("posts.id"), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)

    content = db.Column(db.String, nullable=False)
    vote_count = db.Column(db.Integer, default=1)
    
    # Relationships 
    user = db.relationship("User", back_populates="comments")
    post = db.relationship("Post", back_populates="comments")
    replies = db.relationship("Reply", back_populates="comment")

    # Serializer
    serialize_rules = ("-user", "-post", "-replies")

class Reply(db.Model, SerializerMixin):
    __tablename__ = "replies"
    
    # Fields
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    comment_id = db.Column(db.Integer, db.ForeignKey("comments.id"), nullable=False)

    content = db.Column(db.String, nullable=False)
    vote_count = db.Column(db.Integer, default=1)

    # Relationships
    user = db.relationship("User", back_populates="replies") 
    comment = db.relationship("Comment", back_populates="replies")

    # Serializer
    serialize_rules = ("-user", "-comment")


class Postvote(db.Model, SerializerMixin):
    __table_name__ = "postvotes"
    
    # Fields
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'))
    post_id = db.Column(db.Integer, db.ForeignKey('posts.id'))

    # Relationships
    user = db.relationship("User", back_populates="postvotes")
    post = db.relationship("Post", back_populates="postvotes")

    # Serializer 
    serialize_rules = ("-user", "-post")
